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

	<img style="width:20%" src="./media/component_assets/media/silver frog-02 2.png" alt="" />	
	<h3>silver phroglet sponsors</h3>	
	<SponsorshipRow>
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
		<div class="aspect-square w-full">
			<img src="./media/sponsor_logos/qualcomm_logo.png" alt="Qualcomm"/>
		</div>
		<div class="aspect-square w-full">
			<img src="./media/sponsor_logos/ppg.png" alt="PPG"/>
		</div>
	</SponsorshipRow>
	<img style="width:20%" src="./media/component_assets/media/bronze tadpole-02 2.png" alt="" />		
	<h3>bronze tadpole sponsors</h3>
	<SponsorshipRow>
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
			<a href="http://hackp.ac/mlh-StandOutStickers-hackathons" target="_blank"><img src="./media/sponsor_logos/standout-stickers-logo-3F97EA25B3-seeklogo.com.png" alt="Standout Stickers"/></a>
		</div>
		<div class="aspect-square w-full">
			<a href="https://www.echo3d.com/product" target="_blank"><img src="./media/sponsor_logos/echo3d.png" alt="Echo3D"/></a>
		</div>
		<div class="aspect-square w-full">
			<img src="./media/sponsor_logos/intel.png" alt="Intel"/>
		</div>
		<div class="aspect-square w-full">
			<img src="./media/sponsor_logos/socalgas.png" alt="Southern California Gas Company"/>
		</div>
		<div class="aspect-square w-full">
			<img src="./media/sponsor_logos/ladwp.png" alt="Los Angeles Department of Water and Power"/>
		</div>
		<div class="aspect-square w-full">
			<img src="./media/sponsor_logos/grindr_logo.png" alt="Grindr"/>
		</div>

	</SponsorshipRow>
</Content>
