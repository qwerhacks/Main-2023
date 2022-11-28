<script lang="ts">
	import '../app.css';

	import Header from '$lib/sections/header.svelte';
	import Footer from '$lib/sections/footer.svelte';
</script>

<div class="bg-bg relative" data-sveltekit-prefetch>
	<Header />
	<a
		id="mlh-trust-badge"
		class="block max-w-[100px] min-w-[60px] fixed right-[40px] top-[62px] md:top-0 w-[10%] z-[10000]"
		href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=yellow"
		target="_blank"
		><img
			src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-yellow.svg"
			alt="Major League Hacking 2023 Hackathon Season"
			style="width:100%"
		/></a
	>
	<slot />
	<Footer />
</div>

<svelte:head>
	<link href="/fonts/NightyDEMO.woff2" as="font" type="font/woff2" crossorigin />
	<link href="/fonts/RanilleNormal-Regular.woff2" as="font" type="font/woff2" crossorigin />
</svelte:head>
