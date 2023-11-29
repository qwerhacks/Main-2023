<script lang="ts">
	import Draggable from './Draggable.svelte';

	export let title: string;
	export let src: string;
	export let alt: string;

	let slotRef: HTMLElement;
</script>

<Draggable {slotRef} draggableTargetRef={slotRef}>
	<div bind:this={slotRef} class=" w-24">
		<div class="w-24">
			<img {src} class="unselectable w-24" aria-hidden="true" {alt} />
		</div>
		<h4 class="font-reactor7 text-center line">{title}</h4>
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
