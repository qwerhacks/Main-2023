<script context="module" lang="ts">
	interface ComponentDatum {
		name: string;
		setZCallback: (top: boolean) => void;
	}

	type ComponentDataMap = Record<string, ComponentDatum>;

	let component_data_map = writable<ComponentDataMap>({});

	function bringToTop(name: string) {
		Object.values(get(component_data_map)).forEach((componentDatum) => {
			componentDatum.setZCallback(componentDatum.name === name);
		});
	}
</script>

<script lang="ts">
	import { onMount, tick } from 'svelte';
	import {
		calculateInscribedRectangleDims,
		generateUUID,
		getRotation
	} from '$lib/typescript/utils';
	import { spring, type Spring } from 'svelte/motion';
	import { get, writable } from 'svelte/store';
	import { page } from '$app/stores';

	export let slotRef: HTMLElement;

	export let draggableTargetRef: HTMLElement;
	export let maximizeRef: HTMLElement | undefined = undefined;
	export let closeRef: HTMLElement | undefined = undefined;

	export let has_invis_div: boolean = false;

	export let click_callback: () => void = () => {};

	const name = generateUUID();

	// Register this component with the component_data_map
	// so that it can be brought to the top when clicked\
	$component_data_map = {
		...$component_data_map,
		[name]: {
			name,
			setZCallback: (top: boolean) => {
				if (top) {
					slotRef.style.zIndex = '100';
				} else {
					slotRef.style.zIndex = '10';
				}
			}
		}
	};

	const maximize_padding_px = 10;

	interface BaseWindowState {
		x: number;
		y: number;
		width: number;
		height: number;
	}

	interface InteractiveState {
		isDragging: DraggingState | false;
		isMinimized: boolean;
		isMaximized: MaximizedState | false;
		isClosed: boolean;
		isResizing: boolean;
	}

	interface DraggingState {
		initialX: number;
		initialY: number;
	}

	interface MaximizedState {
		initialX: number;
		initialY: number;
		initialWidth: number;
		initialHeight: number;
	}

	let interactiveState: InteractiveState = {
		isDragging: false,
		isMinimized: false,
		isMaximized: false,
		isClosed: false,
		isResizing: false
	};

	let baseState: Spring<BaseWindowState> = spring(
		{
			x: 0,
			y: 0,
			width: 0,
			height: 0
		},
		{
			stiffness: 0.5,
			damping: 0.9
		}
	);

	let minimizingPromisePending: boolean = false;
	let baseUpdatingPromisePending: boolean = false;
	let baseUpdatingPromise: Promise<void> = Promise.resolve();

	let dragStartX: number = 0;
	let dragStartY: number = 0;

	onMount(() => {
		// Kick the loading of this onMount to after the child component
		// https://stackoverflow.com/a/57489500/5623598
		tick().then(() => {
			const { top, left, width, height } = slotRef.getBoundingClientRect();
			console.log('height', height);
			baseState.set({
				x: left + window.scrollX,
				y: top + window.scrollY,
				width,
				height
			});

			draggableTargetRef.addEventListener('mousedown', dragStartHandler);
			draggableTargetRef.addEventListener('touchstart', dragStartHandler);
			slotRef.addEventListener('click', clickAnywhere);

			if (maximizeRef !== undefined) {
				maximizeRef.addEventListener('click', maximize);
				maximizeRef.addEventListener('mousedown', maximize);
			}

			if (closeRef !== undefined) {
				closeRef.addEventListener('click', close);
				closeRef.addEventListener('mouseover', onHoverCloseStart);
				closeRef.addEventListener('mouseout', onHoverCloseEnd);
			}
		});

		return () => {
			draggableTargetRef.removeEventListener('mousedown', dragStartHandler);
			draggableTargetRef.removeEventListener('touchstart', dragStartHandler);
			slotRef.removeEventListener('click', clickAnywhere);

			if (maximizeRef !== undefined) {
				maximizeRef.removeEventListener('click', maximize);
			}

			if (closeRef !== undefined) {
				closeRef.removeEventListener('click', close);
				closeRef.removeEventListener('mouseover', onHoverCloseStart);
				closeRef.removeEventListener('mouseout', onHoverCloseEnd);
			}
		};
	});

	function close() {
		makeInvisibleDiv();
		console.log('Close');
		slotRef.remove();
	}

	function makeInvisibleDiv() {
		// Only make the invisible div if it doesn't already exist
		if (!has_invis_div) {
			has_invis_div = true;

			// Set the initial height and width again
			const { width, height } = slotRef.getBoundingClientRect();

			let angle = getRotation(slotRef);
			let dims = calculateInscribedRectangleDims(width, height, angle);
			
			$baseState.width = dims.width;
			$baseState.height = dims.height;

			// Switch out the div for a blank div to avoid reflow
			const blankDiv = document.createElement('div');
			// Force the width and height to be the same as the original div
			blankDiv.style.width = `${dims.width}px`;
			blankDiv.style.height = `${dims.height}px`;
			blankDiv.style.transform = `rotate(${angle}deg)`;
			slotRef.replaceWith(blankDiv);

			// Add the div back to the DOM, but as a fixed-position div
			document.body.appendChild(slotRef);
			slotRef.style.position = 'absolute';
			slotRef.style.top = `${$baseState.y}px`;
			slotRef.style.left = `${$baseState.x}px`;
			slotRef.style.width = `${$baseState.width}px`;
			slotRef.style.height = `${$baseState.height}px`;

			// Set the z-level to 10 so it's floating above the other windows
			slotRef.style.zIndex = '10';
		}
	}

	function startDragLoop() {
		// The animationFrame loop that handles dragging
		if (baseUpdatingPromisePending) {
			slotRef.style.top = `${$baseState.y}px`;
			slotRef.style.left = `${$baseState.x}px`;
			slotRef.style.width = `${$baseState.width}px`;
			slotRef.style.height = `${$baseState.height}px`;
			requestAnimationFrame(startDragLoop);
		} else {
			if (interactiveState) {
				if (interactiveState.isDragging) {
					slotRef.style.top = `${$baseState.y}px`;
					slotRef.style.left = `${$baseState.x}px`;
					slotRef.style.width = `${$baseState.width}px`;
					slotRef.style.height = `${$baseState.height}px`;

					requestAnimationFrame(startDragLoop);
				}
			}
		}
	}

	function dragStartHandler(event: MouseEvent | TouchEvent) {
		event.preventDefault();
		console.debug('dragStartHandler');
		if (interactiveState && !interactiveState.isMaximized) {
			const pageX =
				'TouchEvent' in window && event instanceof TouchEvent
					? event.touches[0].pageX
					: event.pageX;
			const pageY =
				'TouchEvent' in window && event instanceof TouchEvent
					? event.touches[0].pageY
					: event.pageY;

			const rect = slotRef.getBoundingClientRect();

			interactiveState.isDragging = {
				initialX: pageX - (rect.left + window.scrollX),
				initialY: pageY - (rect.top + window.scrollY)
			};

			const new_x = pageX - interactiveState.isDragging.initialX;
			const new_y = pageY - interactiveState.isDragging.initialY;

			$baseState.x = new_x;
			$baseState.y = new_y;

			dragStartX = $baseState.x;
			dragStartY = $baseState.y;

			document.body.style.cursor = 'grabbing';
			draggableTargetRef.style.cursor = 'grabbing';
			document.body.style.userSelect = 'none';

			makeInvisibleDiv();
			bringToTop(name);
		}

		requestAnimationFrame(startDragLoop);
	}

	function dragHandler(event: MouseEvent | TouchEvent) {
		if (interactiveState) {
			if (interactiveState.isDragging) {
				const pageX =
					'TouchEvent' in window && event instanceof TouchEvent
						? event.touches[0].pageX
						: event.pageX;
				const pageY =
					'TouchEvent' in window && event instanceof TouchEvent
						? event.touches[0].pageY
						: event.pageY;

				let new_x = pageX - interactiveState.isDragging.initialX;
				let new_y = pageY - interactiveState.isDragging.initialY;

				// ensure that new values are within bounds of the screen

				if (new_x < maximize_padding_px) {
					new_x = maximize_padding_px;
				}

				if (new_y < maximize_padding_px) {
					new_y = maximize_padding_px;
				}

				if (new_x + $baseState.width > document.body.scrollWidth - maximize_padding_px) {
					new_x = document.body.scrollWidth - $baseState.width - maximize_padding_px;
				}

				if (new_y + $baseState.height > document.body.scrollHeight - maximize_padding_px) {
					new_y = document.body.scrollHeight - $baseState.height - maximize_padding_px;
				}

				baseUpdatingPromisePending = true;
				baseUpdatingPromise = baseState.update((state) => {
					return {
						...state,
						x: new_x,
						y: new_y
					};
				});
				baseUpdatingPromise.then(() => {
					baseUpdatingPromisePending = false;
				});
			}
		}
	}

	function dragEndHandler(event: MouseEvent | TouchEvent) {
		console.debug('dragEndHandler');
		if (interactiveState) {
			if (interactiveState.isDragging) {
				const finalX = $baseState.x;
				const finalY = $baseState.y;

				const distanceX = finalX - dragStartX;
				const distanceY = finalY - dragStartY;

				if (Math.abs(distanceX) < 5 && Math.abs(distanceY) < 5) {
					console.log('Triggering click instead of drag!');

					console.log(event)
					
					// Viewport coordinates of mouse
					const pageX =
						'TouchEvent' in window && event instanceof TouchEvent
							? event.changedTouches[0].clientX
							: event.clientX;
					const pageY =
						'TouchEvent' in window && event instanceof TouchEvent
							? event.changedTouches[0].clientY
							: event.clientY;

					const elem = document.elementFromPoint(pageX, pageY);

					// Construct and send a click event
					const clickEvent = new MouseEvent('click', {
						view: window,
						bubbles: true,
						cancelable: true,
						clientX: pageX,
						clientY: pageY
					});
					// Send to element
					elem?.dispatchEvent(clickEvent);

					if (hoverCloseButton) {
						closeRef?.click();
					}
					click_callback();
				}
			}
			interactiveState.isDragging = false;

			document.body.style.userSelect = 'auto';
			document.body.style.removeProperty('cursor');
			draggableTargetRef.style.removeProperty('cursor');
		}
	}

	function maximize() {
		if (interactiveState) {
			if (interactiveState.isMaximized) {
				console.debug('unmaximize');

				slotRef.style.removeProperty('maxWidth');

				const { initialX, initialY, initialWidth, initialHeight } = interactiveState.isMaximized;

				interactiveState.isMaximized = false;

				baseUpdatingPromisePending = true;
				minimizingPromisePending = true;
				baseUpdatingPromise = baseState.update((state) => {
					return {
						...state,
						x: initialX,
						y: initialY,
						width: initialWidth,
						height: initialHeight
					};
				});

				baseUpdatingPromise.then(() => {
					baseUpdatingPromisePending = false;
					minimizingPromisePending = false;
				});
			} else {
				console.debug('maximize');
				makeInvisibleDiv();

				interactiveState.isMaximized = {
					initialX: $baseState.x,
					initialY: $baseState.y,
					initialWidth: $baseState.width,
					initialHeight: $baseState.height
				};

				// Unset max-width on the slotRef
				slotRef.style.maxWidth = 'none';

				// Get viewport width and height
				let viewportWidth = Math.max(
					document.documentElement.clientWidth || 0,
					window.innerWidth || 0
				);
				let viewportHeight = Math.max(
					document.documentElement.clientHeight || 0,
					window.innerHeight || 0
				);

				// Calculate the new width and height
				let width = viewportWidth - maximize_padding_px * 2;
				let height = viewportHeight - maximize_padding_px * 2;

				const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
				const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

				baseUpdatingPromisePending = true;
				baseUpdatingPromise = baseState.update((state) => {
					return {
						...state,
						x: scrollLeft + maximize_padding_px,
						y: scrollTop + maximize_padding_px,
						width: width - 80,
						height: height
					};
				});

				baseUpdatingPromise.then(() => {
					baseUpdatingPromisePending = false;
				});
			}

			requestAnimationFrame(startDragLoop);
		}
	}

	function clickAnywhere() {
		if (has_invis_div) bringToTop(name);
	}

	let hoverCloseButton = false;

	function onHoverCloseStart() {
		hoverCloseButton = true;
	}

	function onHoverCloseEnd() {
		hoverCloseButton = false;
	}
</script>

<svelte:document
	on:mouseup={dragEndHandler}
	on:touchend={dragEndHandler}
	on:mousemove={dragHandler}
	on:touchmove={dragHandler}
/>

<slot />
