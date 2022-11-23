<script lang="ts">
	import type Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import Content from '$lib/components/general/content.svelte';
	import { onMount } from 'svelte';
	import GoodSleep from '$lib/components/prizes/good_sleep.svelte';

	let carousel: Carousel; // for calling methods of the carousel instance
  let CarouselObject: ConstructorOfATypedSvelteComponent; // for calling methods of the carousel instance

  onMount(async () => {
    const module = await import('svelte-carousel');
    CarouselObject = module.default;
  });


	const handleNextClick = () => {
		carousel.goToNext();
	};
</script>

<Content>
	{#if browser}
		<svelte:component
      this={CarouselObject}
    bind:this={carousel}
    >
			<GoodSleep />
		</svelte:component>
	{/if}

	<button on:click={handleNextClick}>Next</button>
</Content>
