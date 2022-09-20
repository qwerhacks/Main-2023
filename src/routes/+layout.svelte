<script lang="ts">
	import '../app.css';

	import Header from '$lib/sections/header.svelte';
</script>

<div class="bg-bg">
  <Header />

  <slot />
</div>


<svelte:head>
	<link href="/fonts/NightyDEMO.woff2" as="font" type="font/woff2" crossorigin />
	<link
		href="/fonts/RanilleNormal-Regular.woff2"
		as="font"
		type="font/woff2"
		crossorigin
	/>
</svelte:head>
