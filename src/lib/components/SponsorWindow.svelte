<script lang="ts">
	import { onMount } from 'svelte';
	import Draggable from './utils/Draggable.svelte';

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

	export let min_width: string = 'min-w-20';
	export let min_height: string = 'min-h-20';

	export let max_width: string = 'max-w-prose';

	export let hide_buttons: boolean = false;
	export let options: boolean = true;
</script>

<Draggable {draggableTargetRef} {maximizeRef} {slotRef} bind:has_invis_div>
	<div
		bind:this={slotRef}
		class="{min_height} {min_width} {main_bg_val} flex flex-col relative shadow-xl border-[5px] border-[#200B3A] pointer-events-auto {max_width} mt-2 mb-2"
		aria-hidden="true"
	>
		<div
			class="border-b-[5px] border-[#200B3A] cursor-grab"
			bind:this={draggableTargetRef}
			style="background: {background_val}"
		>
			<slot name="header">
				<div class="flex flex-row gap-2 text-3xl p-3">
					{#if options}
						<h4 class="font-jetbrains blk px-2 text-base">{title}</h4>
						<button class="ml-auto" bind:this={maximizeRef} tabindex="-1" class:none={hide_buttons}>
							<img src="assets/general/O.svg" class="aspect-square w-4" alt="Close icon" />
						</button>
						<button tabindex="-1" class:none={hide_buttons}>
							<img src="assets/general/_.svg" class="aspect-square w-4" alt="Minimize icon" />
						</button>
						<button tabindex="-1" class:none={hide_buttons} class="mr-2">
							<img src="assets/general/x.svg" class="aspect-square w-4" alt="Close icon" />
						</button>
					{/if}
				</div>
			</slot>
		</div>

		<div
			class="flex flex-col gap-2 p-4 md:p-8 max-w-lg window"
			class:items-center={textCenter}
			class:text-center={textCenter}
		>
			<slot />
		</div>
	</div>
</Draggable>

<style>
	.blk {
		margin-block: 0;
		display: grid;
		align-items: center;
	}
	.window {
		display: inline-block;
	}
</style>
