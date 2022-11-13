<script lang="ts">
	import Contact from '$lib/components/footer/contact.svelte';
	import Sitemap from '$lib/components/footer/sitemap.svelte';
</script>

<div
	class="grid grid-rows-2 justify-center gap-10 bg-teal py-5 px-40 sm:grid-cols-3 sm:grid-rows-1 lg:px-64"
>
	<!-- Frog -->
	<img src="media/frog.svg" alt="A stylized frog" class="hidden h-32 justify-self-end sm:block" />
	<!-- Contact -->
	<Contact />
	<!-- Links -->
	<Sitemap />
</div>
