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
	import TravelMore from '$lib/components/prizes/travel_more.svelte';

	import MostQwer from '$lib/components/prizes/categories/most_qwer.svelte';
	import BestImpact from '$lib/components/prizes/categories/best_impact.svelte';
	import BestMachineLearning from '$lib/components/prizes/categories/best_machine_learning.svelte';
	import BestTechnical from '$lib/components/prizes/categories/best_technical.svelte';
	import BestMobileApp from '$lib/components/prizes/categories/best_mobile_app.svelte';
	import BestWebApp from '$lib/components/prizes/categories/best_web_app.svelte';
	import MostInnovative from '$lib/components/prizes/categories/most_innovative.svelte';
	import MostAccessible from '$lib/components/prizes/categories/most_accessible.svelte';
	import MostLikelyToUnicorn from '$lib/components/prizes/categories/most_likely_to_unicorn.svelte';
	import ComebackBaby from '$lib/components/prizes/categories/comeback_baby.svelte';
	import BestIdea from '$lib/components/prizes/categories/best_idea.svelte';
	import MostSlayfulUi from '$lib/components/prizes/categories/most_slayful_ui.svelte';
	import BiggestFail from '$lib/components/prizes/categories/biggest_fail.svelte';
	import BestUrl from '$lib/components/prizes/categories/best_url.svelte';
	import MostBasic from '$lib/components/prizes/categories/most_basic.svelte';

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

<style>
	@media screen and (min-width: 480px) {
		body {
			background-color: lightgreen;
		}
	}



</style>

<Content>
	<h2>Info on our great prizes coming soon!</h2>

	<!-- {#if browser}
		<svelte:component
      this={CarouselObject}
    bind:this={carousel}>
			<GoTouchGrass />
			<OrganizedLife />
			<LearnANewHobby />
			<GoodSleep />
			<ReadMore />
			<WorkoutPack />
			<TravelMore />
			<SpaDayKit />
			<MakingMemories />
		</svelte:component>
	{/if}<br>

	<h3>prizes by category</h3>
	{#if browser}
		<svelte:component
      this={CarouselObject}
    bind:this={carousel}>
			<MostQwer />
			<BestImpact />
			<BestMachineLearning />
			<BestTechnical />
			<BestMobileApp />
			<BestWebApp />
			<MostInnovative />
			<MostAccessible />
			<MostLikelyToUnicorn />
			<ComebackBaby />
			<BestIdea />
			<MostSlayfulUi />
			<BiggestFail />
			<BestUrl />
			<MostBasic />
		</svelte:component>
	{/if} -->

	<!-- <button on:click={handleNextClick}>Next</button> -->
</Content>
