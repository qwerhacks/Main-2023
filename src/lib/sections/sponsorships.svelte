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
		<div class="aspect-square w-full bg-gray-800" />
		<div class="aspect-square w-full bg-gray-400" />
		<div class="aspect-square w-full bg-gray-400" />
		<div class="aspect-square w-full bg-gray-400" />
		<div class="aspect-square w-full bg-gray-400" />
	</SponsorshipRow>
	<SponsorshipRow>
		<div class="aspect-square w-full bg-gray-800" />
		<div class="aspect-square w-full bg-gray-400" />
		<div class="aspect-square w-full bg-gray-400" />
		<div class="aspect-square w-full bg-gray-400" />
		<div class="aspect-square w-full bg-gray-400" />
	</SponsorshipRow>
	<SponsorshipRow>
		<div class="aspect-square w-full bg-gray-800" />
		<div class="aspect-square w-full bg-gray-400" />
		<div class="aspect-square w-full bg-gray-400" />
		<div class="aspect-square w-full bg-gray-400" />
		<div class="aspect-square w-full bg-gray-400" />
	</SponsorshipRow>
</Content>
