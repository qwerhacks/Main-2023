<script lang="ts">
	import Draggable from './utils/Draggable.svelte';
	import WindowBase from './utils/WindowBase.svelte';
	import ProgressWindow from './ProgressWindow.svelte';
	import SponsorWindow from './SponsorWindow.svelte';
	import CleanButton from './utils/CleanButton.svelte';
	import { onMount } from 'svelte';
</script>

<div class="container">
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
		<div>
			<WindowBase
				title="Gold Sponsors"
				textCenter={true}
				background_val="linear-gradient(90deg, #FDDE97 0.09%, #B79A57 100%)"
				shadow={false}
			>
				<div class="content">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
						alt="Google"
						width="60"
						height="60"
					/>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/5/58/GRINDR_Logo_Yellow.png"
						alt="Grindr"
						width="100"
						height="40"
					/>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
						alt="Apple"
						width="50"
						height="50"
					/>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
						alt="LinkedIn"
						width="200"
					/>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/5/58/GRINDR_Logo_Yellow.png"
						alt="Grindr"
						width="100"
						height="40"
					/>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
						alt="Google"
						width="60"
						height="60"
					/>

					<img
						src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
						alt="LinkedIn"
						width="200"
					/>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
						alt="Apple"
						width="50"
						height="50"
					/>
				</div>
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
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
						alt="Google"
						width="60"
						height="60"
					/>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/5/58/GRINDR_Logo_Yellow.png"
						alt="Grindr"
						width="100"
						height="40"
					/>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/0/01/LinkedIn_Logo.svg"
						alt="LinkedIn"
						width="200"
					/>
				</div>
			</WindowBase>
		</div>
		<div class="pb-10">
			<WindowBase
				title="Bronze Sponsors"
				textCenter={true}
				background_val="linear-gradient(90deg, #98564D 0.09%, #B66E57 100%)"
				shadow={false}
			></WindowBase>
		</div>
	</div>
</div>

<style>
	.container {
		display: flex;
	}
	.left {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: flex-start;
	}
	.right {
		display: flex;
		flex-direction: column;
	}
	.content {
		max-width: 450px;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		justify-content: flex-start;
		align-items: flex-start;
		gap: 25px;
	}
	.sponsors-text {
		width: 300px;
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
