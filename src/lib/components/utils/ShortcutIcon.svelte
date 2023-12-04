<script lang="ts">
	import Draggable from './Draggable.svelte';

	export let title: string;
	export let src: string;
	export let alt: string;

	let slotRef: HTMLElement;
</script>

<Draggable {slotRef} draggableTargetRef={slotRef}>
	<div bind:this={slotRef} class="flex flex-col items-center">
		<div class="w-20 relative">
			<img {src} class="unselectable w-20 aspect-square" aria-hidden="true" {alt} />
			<img class="absolute bottom-0 right-[-0.25rem] w-4" src="assets/hyperlink.svg" aria-hidden="true" alt="hyperlink icon"/>
		</div>
		<h4 class="font-jetbrains text-center text-white text-xl whitespace-nowrap leading-6">{@html title}</h4>
	</div>
</Draggable>

<style>
	.unselectable {
		user-drag: none;
		user-select: none;
		-moz-user-select: none;
		-webkit-user-drag: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}
	.line {
		line-height: 22px;
	}
</style>
