<script lang="ts">
	import '../app.css';

	import Header from '$lib/sections/header.svelte';
	import Footer from '$lib/sections/footer.svelte';
</script>

<div class="bg-bg" data-sveltekit-prefetch>
	<Header />
	<slot />
	<Footer />
</div>

<svelte:head>
	<link href="/fonts/NightyDEMO.woff2" as="font" type="font/woff2" crossorigin />
	<link href="/fonts/RanilleNormal-Regular.woff2" as="font" type="font/woff2" crossorigin />
</svelte:head>
