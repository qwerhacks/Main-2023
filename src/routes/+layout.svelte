<script lang="ts">
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import '../app.pcss';

	import Header from '$lib/components/Header.svelte';

	let header_height: number;
</script>

<div class="gradient relative">
	<!-- <Header bind:height={header_height} /> -->
	<a
		id="mlh-trust-badge"
		style="display:block;max-width:100px;min-width:60px;position:fixed;right:50px;top:0;width:10%;z-index:10000"
		href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=yellow"
		target="_blank"
		><img
			src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-yellow.svg"
			alt="Major League Hacking 2024 Hackathon Season"
			style="width:100%"
		/></a
	>
	<div>
		<slot />
	</div>
</div>
