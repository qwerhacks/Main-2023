<script lang="ts">
	import SponsorshipRow from './../components/sponsorships/SponsorshipRow.svelte';
	import Content from '$lib/components/general/content.svelte';
</script>

<Content>
	<h2>sponsors</h2>
	<p>Thank you to all our sponsors!</p>
	<p>
		This hackathon truly could not happen without your support. If you'd like to consider becoming a
		sponsor, please check out our
	</p>
	<p>&#62; <a>sponsorship package</a> and <a>sponsorship form</a> &#x3C;</p>

	<SponsorshipRow>
		<div class="bg-gray-800 w-full aspect-square" />
		<div class="bg-gray-400 w-full aspect-square" />
		<div class="bg-gray-400 w-full aspect-square" />
		<div class="bg-gray-400 w-full aspect-square" />
		<div class="bg-gray-400 w-full aspect-square" />
	</SponsorshipRow>
	<SponsorshipRow>
		<div class="bg-gray-800 w-full aspect-square" />
		<div class="bg-gray-400 w-full aspect-square" />
		<div class="bg-gray-400 w-full aspect-square" />
		<div class="bg-gray-400 w-full aspect-square" />
		<div class="bg-gray-400 w-full aspect-square" />
	</SponsorshipRow>
	<SponsorshipRow>
		<div class="bg-gray-800 w-full aspect-square" />
		<div class="bg-gray-400 w-full aspect-square" />
		<div class="bg-gray-400 w-full aspect-square" />
		<div class="bg-gray-400 w-full aspect-square" />
		<div class="bg-gray-400 w-full aspect-square" />
	</SponsorshipRow>
</Content>
