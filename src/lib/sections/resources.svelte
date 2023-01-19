<script lang="ts">
	import FoodSecurity from '$lib/components/resources/food_security.svelte';
	import HousingAccess from '$lib/components/resources/housing_access.svelte';
	import HealthcareEquity from '$lib/components/resources/healthcare_equity.svelte';
	import TrackResourceLayout from '$lib/components/general/track_resource_layout.svelte';

	type TrackResources = [string, string, string];

	export let show_links = true;

	const resources: TrackResources[] = [
		[
			'food security 🥕',
			'#b2e4ea',
			'According to the US Census Bureau, “LGBTQIA+ adults living in the U.S. are nearly twice as likely to be experiencing food insecurity during the pandemic than non-LGBTQIA+ adults.',
		],
		[
			'housing access 🏘️',
			'#f2d1e4',
			'While homeownership in the U.S. is currently around 65%, LGBTQIA homeowner rates are lower, at about 49%. How can tech benefit stakeholders like existing organizations (i.e. homeless shelters and community service organizations) build upon their existing infrastructure of support?',
		],
		[
			'healthcare equity ❤️‍🩹',
			'#c6eed7',
			'The fact that “39 percent of all transgender people face some type of harassment or discrimination when seeking routine health care” (American Progress) is just one statistic among many that demonstrate the healthcare inequity the queer community faces.',
		],
	];
</script>

<TrackResourceLayout>
	<h2
		class="text-center"
	>
		Track Info
	</h2>

	<div class="z-10 flex flex-col gap-4 md:flex-row justify-center items-stretch">
		{#each resources as [title, color, description] (title)}
			<div
				style="--color: {color}"
				class="flex-row flex-wrap md:max-w-[33%] max-w-[100%] items-center justify-center rounded-xl bg-[color:var(--color)] p-2 box-border"
			>
				<br />
				<p class="m-2 text-center text-4xl font-bold">{title}</p>
				<p class="m-8">{description}</p>

				{#if show_links === true}
					{#if title == 'food security 🥕'}
						<FoodSecurity />
					{:else if title == 'housing access 🏘️'}
						<HousingAccess />
					{:else if title == 'healthcare equity ❤️‍🩹'}
						<HealthcareEquity />
					{/if}
				{/if}
			</div>
		{/each}
	</div>
	<a
		class="rounded-md bg-button px-5 py-4 hover:bg-button-active active:bg-button-active outline outline-2 outline-button-border"
		href="https://medium.com/@qwerhacks/2023-track-specific-hacker-resources-eb29bc920c46"
		target="_blank"
		rel="noreferrer"
	>
		<p class="text-center">click here for more information!</p>
	</a>
</TrackResourceLayout>
