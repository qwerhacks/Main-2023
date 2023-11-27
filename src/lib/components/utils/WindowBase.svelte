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
</script>

<Draggable {draggableTargetRef} {maximizeRef} {slotRef} bind:has_invis_div>
	<div
		bind:this={slotRef}
		class="min-h-20 min-w-32 bg-white flex flex-col relative shadow-xl border-[5px] border-[#200B3A]"
		class:max-w-prose={!has_invis_div}
		aria-hidden="true"
	>
		<div
			class="flex flex-row gap-2 p-2 border-b-[5px] border-[#200B3A]"
			bind:this={draggableTargetRef}
			style="background: {background_val}"
		>
			<h3>{title}</h3>
			<button class="ml-auto" bind:this={maximizeRef}>O</button>
			<button>-</button>
			<button>X</button>
		</div>
		<div class="flex flex-col gap-2 p-8" class:items-center={textCenter} class:text-center={textCenter}>
			<slot />
		</div>
	</div>
</Draggable>
