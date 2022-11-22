<script lang="ts">
	import Content from "$lib/components/general/content.svelte";
	import Resources from "$lib/sections/resources.svelte";
	import SmallHero from "$lib/sections/small_hero.svelte";
	import Volunteer from "$lib/sections/volunteer.svelte";

</script>

<SmallHero title={"resources"} />

<Resources />
<Volunteer />


<svelte:head>
	<title>QWER Hacks - Resources</title>
</svelte:head>