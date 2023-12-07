<script lang="ts">
	import Draggable from './Draggable.svelte';

	export let title: string;
	export let src: string;
	export let alt: string;

	export let onclick: string | (() => {}) = '';

	let slotRef: HTMLElement;

	let anchor: HTMLAnchorElement | HTMLButtonElement;
</script>

<Draggable {slotRef} draggableTargetRef={slotRef} click_callback={() => anchor.click()}>
	<div bind:this={slotRef} class="flex flex-col justify-center items-center z-40 pointer-events-auto">
		{#if typeof onclick === 'function'}
			<button class="w-20 relative" on:click={onclick} on:keydown={onclick} bind:this={anchor}>
				<img {src} class="unselectable w-20 aspect-square" aria-hidden="true" {alt} />
				<img
					class="absolute bottom-0 right-[-0.25rem] w-4"
					src="assets/hyperlink.svg"
					aria-hidden="true"
					alt="hyperlink icon"
				/>
			</button>
		{:else}
			<a class="w-20 relative" href={onclick} bind:this={anchor}>
				<img {src} class="unselectable w-20 aspect-square" aria-hidden="true" {alt} />
				<img
					class="absolute bottom-0 right-[-0.25rem] w-4"
					src="assets/hyperlink.svg"
					aria-hidden="true"
					alt="hyperlink icon"
				/>
			</a>
		{/if}
		<h4 class="font-jetbrains text-center text-white text-xl whitespace-nowrap leading-6">
			{@html title}
		</h4>
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
