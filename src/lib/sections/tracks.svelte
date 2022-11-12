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
  <h1 class="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">serving the under-served</h1>
	<div class="grid grid-rows-3 grid-cols-1 md:grid-cols-3 md:grid-rows-1">
		{#each tracks as [title, subitems] (title)}
			<div class="p-2">
				<!-- content here -->
				<p class="text-2xl mb-2">{title}</p>
				<ul class="ml-10 list-outside">
					{#each subitems as item (item)}
						<li>{item}</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
</Content>
