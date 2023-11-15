<script lang="ts">
	import '../app.css';

	import Header from '$lib/sections/header.svelte';
	import Footer from '$lib/sections/footer.svelte';
	import Modal from '$lib/components/general/modal.svelte';
</script>

<div class="gradient relative" data-sveltekit-prefetch>
	<Modal>
		<Header />
		<a id="mlh-trust-badge" style="display:block;max-width:100px;min-width:60px;position:fixed;right:50px;top:0;width:10%;z-index:10000" href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=yellow" target="_blank"><img src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-yellow.svg" alt="Major League Hacking 2024 Hackathon Season" style="width:100%"></a>
		<slot />
		<Footer />
	</Modal>
</div>

<svelte:head>
	<link href="/fonts/NightyDEMO.woff2" as="font" type="font/woff2" crossorigin />
	<link href="/fonts/RanilleNormal-Regular.woff2" as="font" type="font/woff2" crossorigin />
</svelte:head>
