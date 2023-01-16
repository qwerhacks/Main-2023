<script lang="ts">
	import { modal_open, openModal } from '$lib/components/general/modal.svelte';
	import type { ComponentType } from 'svelte/internal';

	export let src: string;
	export let alt: string;
	export let this_component: ComponentType;

	function make_density_multiple(base_path: string, multiple: number) {
		const [dot, base_url, extension] = base_path.split('.');
		const final_url = `.${base_url}@${multiple}x.${extension}`;
		return final_url;
	}

	const img_2x = make_density_multiple(src, 2);
	const img_3x = make_density_multiple(src, 3);

	function handleClick() {
		if ($modal_open === false) {
			console.log('opening modal');
			openModal(this_component);
			console.log('modal open');
		}
	}
</script>

<div on:click={handleClick} on:keydown={handleClick} class="cursor-pointer">
	<img
		class="w-full rounded"
		{src}
		srcset="
  {src} 1x,
  {img_2x} 2x,
  {img_3x} 3x
  "
		{alt}
		loading="lazy"
	/>
</div>
