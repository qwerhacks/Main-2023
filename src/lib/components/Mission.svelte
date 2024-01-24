<script lang="ts">
	import ProgressWindow from './ProgressWindow.svelte';
	import SponsorWindow from './SponsorWindow.svelte';
	import Draggable from './utils/Draggable.svelte';
	import WindowBase from './utils/WindowBase.svelte';
	import ShortcutIcon from './utils/ShortcutIcon.svelte';
	let slotRef: HTMLElement;
	let draggableTargetRef: HTMLElement;
	let maximizeRef: HTMLElement;

	let has_invis_div: boolean = false;
</script>

<div class="w-full flex flex-col flex-grow">
	<div class="pl-20">
		<WindowBase
			title=""
			textCenter={true}
			background_val="linear-gradient(90deg, #75ABE7 0%, #F1A4E5 100%)"
			max_width="max-w-lg"
			hide_buttons={true}
			rounded={true}
		>
			<div class="min-w-96">
				<h2 class="font-fredoka">Our mission</h2>
				<p class="font-reactor7">
					QWER Hacks aims to mobilize and bring together LGBTQIA+ individuals and allies to uplift
					marginalized communities, while celebrating authenticity, promoting inclusivity, and
					enabling shared prosperity.
				</p>
			</div>
		</WindowBase>
	</div>
	<div class="absolute right-96">
		<ShortcutIcon title="Raccoon<br>Memes" src="assets/hero/raccoonmemes.svg" alt="raccoon" />
	</div>
	<div class="pt-20 pr-20 pb-20 mr-2 self-end">
		<WindowBase
			title=""
			textCenter={true}
			background_val="linear-gradient(90deg, #75ABE7 0%, #F1A4E5 100%)"
			max_width="w-[50vw] flex flex-row-reverse"
			hide_buttons={true}
			rounded={true}
		>
			<div class="min-w-96">
				<h2 class="font-fredoka">Prizes</h2>
				<p class="font-reactor7">Coming soon!</p>
			</div>
		</WindowBase>
	</div>
</div>

<style>
	@import url('https://fonts.googleapis.com/css?family=Fredoka%20One');
	@import url('https://db.onlinewebfonts.com/c/3101d0058e2d7317cd5a5af7a1216ff3?family=Reactor7');
	.font-fredoka {
		color: #200b3a;
		text-align: center;
		font-family: 'Fredoka One';
		font-size: 32px;
		font-style: normal;
		font-weight: 400;
		line-height: 90.5%; /* 57.92px */
		text-transform: uppercase;
	}
	.font-reactor7 {
		color: #200b3a;
		text-align: center;
		font-family: Reactor7;
		font-size: 17px;
		font-style: normal;
		font-weight: 400;
		line-height: 72%;
	}
	.wrapper {
		margin: 10vw 10vw 0vw 0vw;
		display: flex;
		flex-direction: row-reverse;
	}
</style>
