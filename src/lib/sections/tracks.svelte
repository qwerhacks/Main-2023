<script lang="ts">
	import Content from '$lib/components/general/content.svelte';

	type Track = [string, string[]];

	const tracks: Track[] = [
		[
			'food security',
			['food banks', 'soup kitchen', 'affordable & healthy meals', 'community gardens'],
		],
		[
			'housing access',
			[
				'homelessness',
				'womens/LGBTQ+ shelters',
				'zoning/gentrification',
				'climate disaster relief',
			],
		],
		[
			'healthcare equity',
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
	<h1 class="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-6xl text-transparent">
		serving the under-served
	</h1>
	<div class="grid grid-cols-1 grid-rows-3 md:grid-cols-3 md:grid-rows-1">
		{#each tracks as [title, subitems] (title)}
			<div class="p-2">
				<!-- content here -->
				<p class="mb-2 text-2xl">{title}</p>
				<ul class="ml-10 list-outside">
					{#each subitems as item (item)}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</Content>
