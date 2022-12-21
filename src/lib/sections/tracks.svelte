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
	<div slot="background" class="z-0">
		<span class="absolute left-0 top-15 inline-block max-w-[300px]">
			<img class="w-8/12" src="./media/component_assets/media/leftSide2.svg" alt="" />
		</span>
		<img
			class="absolute right-0 top-20 inline-block max-w-[200px]"
			src="./media/component_assets/media/rightSide2.svg"
			alt=""
			style="  direction: rtl;			"
		/>
	</div>
	<h2 class="z-10">theme & tracks</h2>
	<div class="bg-white/1 backdrop-blur-[20px] p-3 px-6">
		<h1
			class="z-10 bg-gradient-to-r from-[hsl(101,38%,70%)] via-[hsl(272,79%,73%)] to-[hsl(215,53%,70%)] bg-clip-text text-5xl sm:text-6xl text-transparent text-center w-min md:w-auto"
		>
			serving the <span class="whitespace-nowrap">under-served</span>
		</h1>
	</div>

	<div class="z-10 flex flex-col gap-8 md:flex-row justify-center items-center">
		{#each tracks as [title, color, subitems] (title)}
			<div
				style="--color: {color}"
				class="flex aspect-square w-100 max-w-[80%] md:max-w-[25%] items-center justify-center rounded-xl bg-[color:var(--color)] p-2 box-border"
			>
				<!-- content here -->
				<p class="m-2 text-center text-4xl font-bold">{title}</p>
			</div>
		{/each}
	</div>
</Content>
