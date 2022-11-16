<script lang="ts">
	import SponsorshipRow from './../components/sponsorships/SponsorshipRow.svelte';
	import Content from '$lib/components/general/content.svelte';
</script>

<Content>
	<div slot="background" class="z-0">
		<span class="absolute left-0 bottom-0 hidden md:inline-block">
			<img class="w-8/12" src="./media/component_assets/media/BottomLeft.svg" alt="" />
		</span>
		<img
			class="absolute right-0 bottom-0 max-w-[70%]"
			src="./media/component_assets/media/BottomRight.svg"
			alt=""
		/>
	</div>
	<h2>sponsors</h2>
	<p>Thank you to all our sponsors!</p>
	<p>
		This hackathon truly could not happen without your support. If you'd like to consider becoming a
		sponsor, please check out our
	</p>
	<p>&#62; <a href='#'>sponsorship package</a> and <a href='#'>sponsorship form</a> &#x3C;</p>

	<SponsorshipRow>
		<div class="aspect-square w-full">
			<img src="./media/component_assets/media/goldfrog-03 2.png" alt="" />		
		</div>
		<div class="aspect-square w-full bg-gray-400" />
		<div class="aspect-square w-full bg-gray-400" />
		<div class="aspect-square w-full bg-gray-400" />
		<div class="aspect-square w-full bg-gray-400" />
	</SponsorshipRow>
	<SponsorshipRow>
		<div class="aspect-square w-full">
			<img src="./media/component_assets/media/silver frog-02 2.png" alt="" />		
		</div>
		<div class="aspect-square w-full bg-gray-400" />
		<div class="aspect-square w-full bg-gray-400" />
		<div class="aspect-square w-full bg-gray-400" />
		<div class="aspect-square w-full bg-gray-400" />
	</SponsorshipRow>
	<SponsorshipRow>
		<div class="aspect-square w-full">
			<img src="./media/component_assets/media/bronze tadpole-02 2.png" alt="" />		
		</div>
		<div class="aspect-square w-full bg-gray-400" />
		<div class="aspect-square w-full bg-gray-400" />
		<div class="aspect-square w-full bg-gray-400" />
		<div class="aspect-square w-full bg-gray-400" />
	</SponsorshipRow>
</Content>
