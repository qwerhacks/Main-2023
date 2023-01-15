<script lang="ts">
	import Hero from '$lib/sections/hero.svelte';
	import Prizes from '$lib/sections/prizes.svelte';
	import Questions from '$lib/sections/questions.svelte';
	import Resources from '$lib/sections/resources.svelte';
	import Sponsorships from '$lib/sections/sponsorships.svelte';
	import Tagline from '$lib/sections/tagline.svelte';
	import Tracks from '$lib/sections/tracks.svelte';
	import Volunteer from '$lib/sections/volunteer.svelte';
    import Schedule from '$lib/sections/schedule.svelte';
</script>

<Hero />
<Schedule />
<Tagline />
<Resources show_links={false} />
<Prizes />
<Questions />
<Volunteer />
<Sponsorships />


<svelte:head>
	<title>QWER Hacks - Home</title>
</svelte:head>
