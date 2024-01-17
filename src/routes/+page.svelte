<script lang="ts">
	import Donate from '$lib/components/Donate.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Info from '$lib/components/Info.svelte';
	import Sponsors from '$lib/components/Sponsors.svelte';
	import Mission from '$lib/components/Mission.svelte';
</script>

<Hero />
<div class="w-full" style="background: linear-gradient(180deg, #A84FB3 0%, #E689C6 99.48%);">
	<Info />
	<Donate />
	<Sponsors />
	<Mission />
</div>
