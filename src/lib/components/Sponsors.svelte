<script lang="ts">
	import Draggable from './utils/Draggable.svelte';
	import WindowBase from './utils/WindowBase.svelte';
	import ProgressWindow from './ProgressWindow.svelte';
	import SponsorWindow from './SponsorWindow.svelte';
	import CleanButton from './utils/CleanButton.svelte';
	import { onMount } from 'svelte';
</script>

<div class="w-full flex flex-col md:flex-row gap-8 m-12">
	<div class="left">
		<WindowBase
			title=""
			textCenter={true}
			background_val="linear-gradient(90deg, #AAD6A1 0.09%, #9FF4CB 100%)"
			shadow={false}
		>
			<div class="sponsors-text grid justify-items-center">
				<h2 class="text-4xl uppercase mb-2">Sponsors</h2>
				<p class="text-xs mb-2">
					Thank you to all our sponsors! <br /><br /> This hackathon truly could not happen without
					your support. If you'd like to consider becoming a sponsor, please check out our
					<a href="/sponsorship" class="underline">sponsorship package</a>.
				</p>
			</div>
			<div class="justify-items-center grid">
				<CleanButton>
					<a href="/sponsorship">
						<div style="width: 130px;">
							<p class="packagelink font-jetbrains">link to package</p>
						</div>
					</a></CleanButton
				>
			</div>
		</WindowBase>
	</div>
	<div class="right justify-items-center gap-4">
		<div class="">
			<WindowBase
				title="Gold Sponsors"
				textCenter={true}
				background_val="linear-gradient(90deg, #FDDE97 0.09%, #B79A57 100%)"
				shadow={false}
			>
				<a class="content" href="https://www.ppg.com/en-US">
					<img src="assets/sponsors/ppg.svg" alt="PPG" width="200" />
				</a>
			</WindowBase>
		</div>
		<div>
			<WindowBase
				title="Silver Sponsors"
				textCenter={true}
				background_val="linear-gradient(90deg, #B1B1B0 0.09%, #F2F2F2 100%)"
				shadow={false}
			>
				<div class="content">
					<a class="content" href="https://www.northropgrumman.com/">
						<img src="assets/sponsors/northrop.svg" alt="Northrop Grumman" width="200" />
					</a>
				</div></WindowBase
			>
		</div>
		<div class="pb-10">
			<WindowBase
				title="Bronze Sponsors"
				textCenter={true}
				background_val="linear-gradient(90deg, #98564D 0.09%, #B66E57 100%)"
				shadow={false}
			>
				<div class="flex flex-row flex-wrap justify-around gap-2">
					<a class="content" href="https://www.crowdstrike.com/en-us/">
						<img src="assets/sponsors/crowdstrike.png" alt="CrowdStrike" width="200" />
					</a>
					<a class="content" href="https://www.directv.com/">
						<img src="assets/sponsors/directv.svg" alt="DirecTV" width="200" />
					</a>
					<a class="content px-6" href="https://www.chevron.com/">
						<img src="assets/sponsors/chevron.svg" alt="Chevron" width="200" />
					</a>
					<a class="content" href="https://holoash.com/">
						<img src="assets/sponsors/holoash_inverted.png" alt="HoloAsh" width="200" />
					</a>
					<a class="content" href="https://aerospace.org/">
						<img src="assets/sponsors/aerospace.svg" alt="The Aerospace Corporation" width="200" />
					</a>
					<a class="content" href="https://www.boeing.com/">
						<img src="assets/sponsors/boeing.svg" alt="Boeing" width="200" />
					</a>
					<a class="content" href="https://www.sce.com/">
						<img src="assets/sponsors/edison.svg" alt="Southern California Edison" width="200" />
					</a>
					<a class="content" href="https://www.illumina.com/">
						<img src="assets/sponsors/illumina.svg" alt="Illumina" width="200" />
					</a>
					<a class="content" href="https://cloud.google.com/">
						<img src="assets/sponsors/gcp.svg" alt="Google Cloud" width="200" />
					</a>
					<a class="content" href="https://www.lockheedmartin.com/">
						<img src="assets/sponsors/lockheed.svg" alt="Lockheed Martin" width="200" />
					</a>
				</div>
			</WindowBase>
		</div>
	</div>
</div>

<style>
	.left {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}
	.right {
		flex: 1;
		display: flex;
		flex-direction: column;
	}
	.content {
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: flex-start;
		align-content: center;
		gap: 25px;
	}
	.sponsors-text {
		max-width: 300px;
		min-height: 120px;
	}
	.packagelink {
		color: #200b3a;
		text-align: center;
		font-size: 13px;
		font-style: normal;
		font-weight: 400;
		line-height: 300%; /* 15.84px */
		text-transform: lowercase;
	}
</style>
