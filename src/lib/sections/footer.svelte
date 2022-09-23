<script lang="ts">
	import Contact from "$lib/components/footer/contact.svelte";
	import Sitemap from "$lib/components/footer/sitemap.svelte";
import Content from "$lib/components/general/content.svelte";
	import Subtitle from "$lib/components/general/subtitle.svelte";
	import Logo from "$lib/components/hero/logo.svelte";


</script>

<div class="grid grid-cols-3 px-5 bg-teal">
  <!-- Frog -->
  <Logo />
  <!-- Contact -->
  <Contact />
  <!-- Links -->
  <Sitemap />
</div>