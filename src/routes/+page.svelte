<script lang="ts">
	import Donate from '$lib/components/Donate.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Info from '$lib/components/Info.svelte';
	import FAQ from '$lib/components/FAQ.svelte';
</script>

<Hero />
<div class="w-full" style="background: linear-gradient(180deg, #A84FB3 0%, #E689C6 99.48%);">
	<Info />
</div>
<div class="w-full" style="background: linear-gradient(180deg, #E688C6 0%, #F4C1CA 100%);">
	<FAQ />
</div>
<div class="w-full" style="background: linear-gradient(180deg, #F4C0CA 0%, #C993FF 100%);


">
	<Donate />
</div>
