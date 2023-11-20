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
	import { base } from '$app/paths';
	import { generateUUID } from '$lib/utils';
	import { onMount } from 'svelte';
	import { spring, type Spring } from 'svelte/motion';
	import { get, writable } from 'svelte/store';

	/**
	 * A component that acts like a normal div with aesthetic windowchrome
	 * Until it's dragged or one of the buttons is hit, then it's place in the DOM is switched out for
	 * a blank div (to avoid reflow) and the div itself becomes
	 * draggable, minizable, maximizable, and closeable  (and resizable?)
	 */
	export let title: string;

	const name = generateUUID();

	// Register this component with the component_data_map
	// so that it can be brought to the top when clicked\
	$component_data_map = {
		...$component_data_map,
		[name]: {
			name,
			setZCallback: (top: boolean) => {
				if (top) {
					main_element.style.zIndex = '100';
				} else {
					main_element.style.zIndex = '10';
				}
			}
		}
	};

	let main_element: HTMLDivElement;

	let has_invis_div: boolean = false;

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

	onMount(() => {
		// Extract the window's position from the DOM
		const { x, y, width, height } = main_element.getBoundingClientRect();
		baseState.set({
			x,
			y,
			width,
			height
		});
	});

	function makeInvisibleDiv() {
		// Only make the invisible div if it doesn't already exist
		if (!has_invis_div) {
			has_invis_div = true;

			// Switch out the div for a blank div to avoid reflow
			const blankDiv = document.createElement('div');
			// Force the width and height to be the same as the original div
			blankDiv.style.width = `${$baseState.width}px`;
			blankDiv.style.height = `${$baseState.height}px`;
			main_element.replaceWith(blankDiv);

			// Add the div back to the DOM, but as a fixed-position div
			document.body.appendChild(main_element);
			main_element.style.position = 'fixed';
			main_element.style.top = `${$baseState.y}px`;
			main_element.style.left = `${$baseState.x}px`;
			main_element.style.width = `${$baseState.width}px`;
			main_element.style.height = `${$baseState.height}px`;

			// Set the z-level to 10 so it's floating above the other windows
			main_element.style.zIndex = '10';
		}
	}

	function startDragLoop() {
		// The animationFrame loop that handles dragging
		if (baseUpdatingPromisePending) {
			main_element.style.top = `${$baseState.y}px`;
			main_element.style.left = `${$baseState.x}px`;
			main_element.style.width = `${$baseState.width}px`;
			main_element.style.height = `${$baseState.height}px`;
			requestAnimationFrame(startDragLoop);
		} else {
			if (interactiveState) {
				if (interactiveState.isDragging) {
					main_element.style.top = `${$baseState.y}px`;
					main_element.style.left = `${$baseState.x}px`;
					main_element.style.width = `${$baseState.width}px`;
					main_element.style.height = `${$baseState.height}px`;

					requestAnimationFrame(startDragLoop);
				}
			}
		}
	}

	function dragStartHandler(event: MouseEvent | TouchEvent) {
		console.debug('dragStartHandler');
		if (interactiveState && !interactiveState.isMaximized) {
			const clientX = event instanceof TouchEvent ? event.touches[0].clientX : event.clientX;
			const clientY = event instanceof TouchEvent ? event.touches[0].clientY : event.clientY;

			interactiveState.isDragging = {
				initialX: clientX - main_element.getBoundingClientRect().x,
				initialY: clientY - main_element.getBoundingClientRect().y
			};

			const new_x = clientX - interactiveState.isDragging.initialX;
			const new_y = clientY - interactiveState.isDragging.initialY;

			$baseState.x = new_x;
			$baseState.y = new_y;

			console.debug(interactiveState);

			makeInvisibleDiv();
      bringToTop(name)
		}

		requestAnimationFrame(startDragLoop);
	}

	function dragHandler(event: DragEvent | MouseEvent) {
		if (interactiveState) {
			if (interactiveState.isDragging) {
				console.debug('dragHandler');
				const clientX = event instanceof DragEvent ? event.clientX : event.clientX;
				const clientY = event instanceof DragEvent ? event.clientY : event.clientY;

				let new_x = clientX - interactiveState.isDragging.initialX;
				let new_y = clientY - interactiveState.isDragging.initialY;

				// ensure that new values are within bounds of the screen

				if (new_x < maximize_padding_px) {
					new_x = maximize_padding_px;
				}

				if (new_y < maximize_padding_px) {
					new_y = maximize_padding_px;
				}

				if (new_x + $baseState.width > window.innerWidth - maximize_padding_px) {
					new_x = window.innerWidth - $baseState.width - maximize_padding_px;
				}

				if (new_y + $baseState.height > window.innerHeight - maximize_padding_px) {
					new_y = window.innerHeight - $baseState.height - maximize_padding_px;
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

	function dragEndHandler(event: Event) {
		console.debug('dragEndHandler');
		if (interactiveState) {
			interactiveState.isDragging = false;
		}
	}

	function maximize() {
		if (interactiveState) {
			if (interactiveState.isMaximized) {
				console.debug('unmaximize');

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

				baseUpdatingPromisePending = true;
				baseUpdatingPromise = baseState.update((state) => {
					return {
						...state,
						x: maximize_padding_px,
						y: maximize_padding_px,
						width: window.innerWidth - maximize_padding_px * 2,
						height: window.innerHeight - maximize_padding_px * 2
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
</script>

<svelte:document
	on:mouseup={dragEndHandler}
	on:touchend={dragEndHandler}
	on:mousemove={dragHandler}
/>

<div
	bind:this={main_element}
	class="min-h-20 min-w-32 bg-slate-500 flex flex-col relative shadow-xl"
	class:max-w-prose={!has_invis_div}
  on:click={clickAnywhere}
  on:touchstart={clickAnywhere}
  aria-hidden="true"
>
	<button
		class="bg-green-100 flex flex-row gap-2 p-2"
		on:mousedown={dragStartHandler}
		on:touchstart={dragStartHandler}
		aria-grabbed={interactiveState?.isDragging != false ?? 'false'}
	>
		<h3>{title}</h3>
		<button class="ml-auto" on:click={maximize}>O</button>
		<button>-</button>
		<button>X</button>
	</button>
	<div class="p-2">
		<slot />
	</div>
</div>
