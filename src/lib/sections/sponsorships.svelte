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
	<p class="text-center">
		This hackathon truly could not happen without your support. If you'd like to consider becoming a
		sponsor, please check out our 
		<a 
			class="underline"
			href='https://drive.google.com/file/d/1-LU9MYjEtRahXcjW9rPDqXXhbEBlg_IU/view?usp=sharing'
		>sponsorship package</a>.
	</p>

	<SponsorshipRow>
		<div class="aspect-square w-full">
			<img src="./media/component_assets/media/silver frog-02 2.png" alt="Silver Tadpole Sponsors" />		
		</div>
		<div class="aspect-square w-full">
			<img src="./media/sponsor_logos/northrop-grumman.png" alt="Northrop Grumman"/>
		</div>
		<div class="aspect-square w-full">
			<img src="./media/sponsor_logos/directv.png" alt="DirecTV"/>
		</div>
		<div class="aspect-square w-full">
			<img src="./media/sponsor_logos/aerospace-corp.png" alt="The Aerospace Corporation"/>
		</div>
		<div class="aspect-square w-full">
			<img src="./media/sponsor_logos/boeing.png" alt="Boeing"/>
		</div>
		<div class="aspect-square w-full">
			<img src="./media/sponsor_logos/crowdstrike.png" alt="Crowdstrike"/>
		</div>
	</SponsorshipRow>
	<SponsorshipRow>
		<div class="aspect-square w-full">
			<img src="./media/component_assets/media/bronze tadpole-02 2.png" alt="Bronze Tadpole Sponsors" />		
		</div>
		<div class="aspect-square w-full">
			<img src="./media/sponsor_logos/illumina.png" alt="Illumina"/>
		</div>
		<div class="aspect-square w-full">
			<img src="./media/sponsor_logos/visa.png" alt="Visa"/>
		</div>
		<div class="aspect-square w-full">
			<img src="./media/sponsor_logos/marvell.png" alt="Marvell"/>
		</div>
		<div class="aspect-square w-full">
			<img src="./media/sponsor_logos/lockheed.png" alt="Lockheed Martin"/>
		</div>
		<div class="aspect-square w-full">
			<img src="./media/sponsor_logos/chevron.png" alt="Chevron"/>
		</div>
		<div class="aspect-square w-full">
			<img src="./media/sponsor_logos/rivian.png" alt="Rivian"/>
		</div>
		<div class="aspect-square w-full">
			<img src="./media/sponsor_logos/standout-stickers-logo-3F97EA25B3-seeklogo.com.png" alt="Standout Stickers"/>
		</div>
	</SponsorshipRow>
</Content>
