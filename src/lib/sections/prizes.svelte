<script lang="ts">
	import type Carousel from 'svelte-carousel';
	import { browser } from '$app/environment';
	import Content from '$lib/components/general/content.svelte';
	import { onMount } from 'svelte';
	import GoodSleep from '$lib/components/prizes/good_sleep.svelte';
	import OrganizedLife from '$lib/components/prizes/organized_life.svelte';
	import SpaDayKit from '$lib/components/prizes/spa_day_kit.svelte';
	import ReadMore from '$lib/components/prizes/read_more.svelte';
	import GoTouchGrass from '$lib/components/prizes/go_touch_grass.svelte';
	import LearnANewHobby from '$lib/components/prizes/learn_a_new_hobby.svelte';
	import MakingMemories from '$lib/components/prizes/making_memories.svelte';
	import WorkoutPack from '$lib/components/prizes/workout_pack.svelte';

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
			<OrganizedLife />
			<SpaDayKit />
			<ReadMore />
			<GoTouchGrass />
			<LearnANewHobby />
			<MakingMemories />
			<WorkoutPack />
		</svelte:component>
	{/if}

	<button on:click={handleNextClick}>Next</button>
</Content>
