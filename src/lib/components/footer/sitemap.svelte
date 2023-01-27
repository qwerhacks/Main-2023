<script lang="ts">
	let links = [
		{
			title: "apply",
			url: "https://tinyurl.com/QWERHacks23"
		},
		{
			title: "track info",
			url: "https://medium.com/@qwerhacks/2023-track-specific-hacker-resources-eb29bc920c46"
		},
		{
			title: "home",
			url: "https://qwerhacks.com"
		},
		{
			title: "volunteer",
			url: "https://forms.gle/ViXR2qANhuFsFptK9"
		},
		{
			title: "MLH Code of Conduct",
			url: "https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
		}
	];
</script>

<div>
	<h3>Links</h3>
	<div class="grid grid-cols-2 justify-self-start">
		{#each links as link}
			<a href={link.url} class="underline hover:underline-offset-2">{link.title}</a>
		{/each}
	</div>
</div>
