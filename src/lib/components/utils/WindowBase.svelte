<script lang="ts">
	import { onMount } from 'svelte';
	import Draggable from './Draggable.svelte';

	export let textCenter: boolean = false;

	let slotRef: HTMLElement;
	let draggableTargetRef: HTMLElement;
	let maximizeRef: HTMLElement;

	let has_invis_div: boolean = false;

	onMount(() => {
		console.log('slotRefWindow', slotRef);
	});

	export let title: string;
	export let background_val: string;
	export let main_bg_val: string = 'bg-white';

	export let max_width: string = 'max-w-prose';
</script>

<Draggable {draggableTargetRef} {maximizeRef} {slotRef} bind:has_invis_div>
	<div
		bind:this={slotRef}
		class="min-h-20 min-w-32 {main_bg_val} flex flex-col relative shadow-xl border-[5px] border-[#200B3A] pointer-events-auto {max_width}"
		aria-hidden="true"
	>
		<div
			class="flex flex-row gap-2 p-2 border-b-[5px] border-[#200B3A] text-3xl cursor-grab"
			bind:this={draggableTargetRef}
			style="background: {background_val}"
		>
			<h4>{title}</h4>
			<button class="ml-auto" bind:this={maximizeRef} tabindex="-1">O</button>
			<button tabindex="-1">-</button>
			<button tabindex="-1">X</button>
		</div>
		<div
			class="flex flex-col gap-2 p-4 md:p-8"
			class:items-center={textCenter}
			class:text-center={textCenter}
		>
			<slot />
		</div>
	</div>
</Draggable>
