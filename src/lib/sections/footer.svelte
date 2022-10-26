<script lang="ts">
	import Contact from "$lib/components/footer/contact.svelte";
	import Sitemap from "$lib/components/footer/sitemap.svelte";

</script>

<div class="grid grid-rows-2 sm:grid-cols-3 sm:grid-rows-1 gap-10 py-5 px-40 lg:px-64 bg-teal justify-center">
  <!-- Frog -->
  <img src="media/frog.svg" alt="A stylized frog" class="hidden sm:block h-32 justify-self-end"/>
  <!-- Contact -->
  <Contact />
  <!-- Links -->
  <Sitemap />
</div>