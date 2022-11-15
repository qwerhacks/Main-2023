<script lang="ts">
	import Content from '$lib/components/general/content.svelte';

	type Track = [string, string, string[]];

	const tracks: Track[] = [
		[
			'food security',
			'#D5E8CC',
			['food banks', 'soup kitchen', 'affordable & healthy meals', 'community gardens'],
		],
		[
			'housing access',
			'#DFC2F8',
			[
				'homelessness',
				'womens/LGBTQ+ shelters',
				'zoning/gentrification',
				'climate disaster relief',
			],
		],
		[
			'healthcare equity',
			'#C1D3EC',
			[
				'mental health',
				'abortion access',
				'HRT & gender afferming care',
				'HIV prevention / sex ex',
			],
		],
	];
</script>

<Content>
	<h2 class="">theme & tracks</h2>
	<h1 class="bg-gradient-to-r from-[hsl(101,38%,70%)] via-[hsl(272,79%,73%)] to-[hsl(215,53%,70%)] bg-clip-text text-5xl sm:text-6xl text-transparent text-center">
		serving the <span class="whitespace-nowrap">under-served</span>
	</h1>
	<div class="flex flex-col gap-8 md:flex-row justify-center items-center">
		{#each tracks as [title, color, subitems] (title)}
			<div
				style="--color: {color}"
				class="flex aspect-square w-100 max-w-[80%] md:max-w-[25%] items-center justify-center rounded-2xl bg-[color:var(--color)] p-2 box-border">
				<!-- content here -->
				<p class="m-2 text-center text-4xl font-bold">{title}</p>
			</div>
		{/each}
	</div>
</Content>
