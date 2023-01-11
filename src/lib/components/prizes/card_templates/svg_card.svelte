<script lang="ts">
	import { modal_open, component_to_display, openModal } from '$lib/components/general/modal.svelte';
	import type { SvelteComponent } from 'svelte';
	import type { ComponentType } from 'svelte/internal';

	export let src: string;
	export let alt: string;
  export let this_component: ComponentType;

  function handleClick() {
    if ($modal_open === false) {
      console.log("opening modal")
      openModal(this_component);
      console.log("modal open")
    }
  }
</script>

<div
	on:click={handleClick}
  on:keydown={handleClick}
  class="cursor-pointer"
>
  <object
	class="w-full rounded pointer-events-none"
	type="image/svg+xml"
	data={src}
	aria-label={alt}
/>
</div>
