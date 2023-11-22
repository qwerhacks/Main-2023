<script lang="ts">
	import Background from '$lib/components/hero/background.svelte';
	import Button from '$lib/components/hero/button.svelte';
	import Logo from '$lib/components/hero/logo.svelte';
</script>

<div class="h-100vw relative w-full overflow-hidden overscroll-contain">
	<div id="background" class="absolute z-0 h-full w-full">
		<Background />
	</div>
	<div id="content" class="z-10 flex h-screen w-screen flex-row items-center justify-center p-10">
		<a class="sponsor" href="/sponsor">sponsor us!</a>
		<div
			class="bg-white/1 flex w-max max-w-[70vw] flex-col items-center justify-center gap-6 rounded-xl p-10 backdrop-blur-[0px] md:max-w-[70vw] md:p-14"
		>
			<Logo />
			<span class="font-reactor7 text-5xl text-white text-center textshadow">MLH’s First LGBTQIA+ Hackathon!<br/>~ click on the icons to learn more ~</span>
			<!-- <Button /> -->
		</div>
	</div>
</div>

<style lang="scss">
	@import 'src/app.scss';
	.textshadow {
		text-shadow:#200b3a 4px 0px 0px,#200b3a -4px 0px 0px,#200b3a 0px 4px 0px,#200b3a 0px -4px 0px;
	}
	.sponsor {
		@include retro-button;
		position: absolute;
		top: 0;
		left: 0;
		@apply m-10;
		z-index: 1000;
		@apply bg-lavender;
	}
</style>
