<script lang="ts">
	import Content from '$lib/components/general/content.svelte';
	import FoodSecurity from '$lib/components/resources/food_security.svelte';
	import HousingAccess from '$lib/components/resources/housing_access.svelte';
	import HealthcareEquity from '$lib/components/resources/healthcare_equity.svelte';
	import TrackResourceLayout from '$lib/components/general/track_resource_layout.svelte';

	type TrackResources = [string, string, string];

	const resources: TrackResources[] = [
		[
			'food security 🥕',
			'#b2e4ea',
			'According to the US Census Bureau, “LGBTQIA+ adults living in the U.S. are nearly twice as likely to be experiencing food insecurity during the pandemic than non-LGBTQIA+ adults.',
		],
		[
			'housing access 🏘️',
			'#f2d1e4',
			'While homeownership in the U.S. is currently around 65%, LGBTQIA homeowner rates are lower, at about 49%. How can tech benefit stakeholders like existing organizations, i.e. homeless shelters, community service organizations, to build upon their existing infrastructure of support?',
		],
		[
			'healthcare equity ❤️‍🩹',
			'#c6eed7',
			'The fact that “39 percent of all transgender people face some type of harassment or discrimination when seeking routine health care” (American Progress) is just one statistic among many that demonstrate the healthcare inequity the queer community faces.',
		],
	];
</script>

<!--<Content>
	<h2>resources</h2>

	<h3>Hacker Support</h3>
	<div class="h-96 bg-gray-500" />

	<h3>LGBTQIA+ reading ></h3>
	<div class="h-96 bg-gray-500" />

	<h3>project gallery (?)</h3>
	<div class="h-96 bg-gray-500" />
</Content>-->

<TrackResourceLayout>
	<h1 class="max-w-[80%] z-10 bg-gradient-to-r from-[hsl(194,39%,70%)] via-[hsl(272,79%,73%)] to-[hsl(327,53%,70%)] bg-clip-text text-5xl
	sm:text-5xl text-transparent text-center w-min md:w-auto">
			2023 track-specific hacker resources
	</h1>

	<a class="rounded-md bg-button px-10 py-4 hover:bg-button-active active:bg-button-active outline outline-2 outline-button-border"
	href="https://medium.com/@qwerhacks/2023-track-specific-hacker-resources-eb29bc920c46" target="_blank" rel="noreferrer">
		<p>click here for more information!</p>
	</a>

	<div class="z-10 flex flex-col gap-4 md:flex-row justify-center items-stretch">
		{#each resources as [title, color, description] (title)}
			<div
				style="--color: {color}"
				class="flex-row flex-wrap md:max-w-[33%] max-w-[100%] items-center justify-center rounded-xl bg-[color:var(--color)] p-2 box-border"
			>
				<br><p class="m-2 text-center text-4xl font-bold">{title}</p>
				<p class="m-10">{description}</p>

				{#if (title=='food security 🥕')}
					<FoodSecurity />
				{:else if (title=='housing access 🏘️')}
					<HousingAccess />
				{:else if (title=='healthcare equity ❤️‍🩹')}
					<HealthcareEquity />
				{/if}
			</div>
		{/each}
	</div>
</TrackResourceLayout>



