<script lang="ts">
	import Content from "$lib/components/general/content.svelte";
	import Resources from "$lib/sections/resources.svelte";
	import SmallHero from "$lib/sections/small_hero.svelte";
	import Volunteer from "$lib/sections/volunteer.svelte";

</script>

<SmallHero title={"resources"} />

<Volunteer />

<Content>
	<div class="z-10 flex flex-col items-center gap-5 w-full">
		<h2 class="text-center">More coming soon...</h2>
	</div>
</Content>





<svelte:head>
	<title>QWER Hacks - Resources</title>
</svelte:head>