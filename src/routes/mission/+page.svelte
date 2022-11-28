<script lang="ts">
	import Mission from "$lib/sections/mission.svelte";
	import SmallHero from "$lib/sections/small_hero.svelte";
	import WhoWeAre from "$lib/sections/who-we-are.svelte";

</script>

<SmallHero title={"mission & history"} />

<Mission />
<WhoWeAre />


<svelte:head>
	<title>QWER Hacks - Mission</title>
</svelte:head>