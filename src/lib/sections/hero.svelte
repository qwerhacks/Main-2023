<script lang="ts">
	import Background from '$lib/components/hero/background.svelte';
	import Button from '$lib/components/hero/button.svelte';
	import Logo from '$lib/components/hero/logo.svelte';
</script>

<div class="h-100vw relative w-full overflow-hidden overscroll-contain">
	<div id="background" class="absolute z-0 h-full w-full">
		<Background />
	</div>
	<div id="content" class="z-10 flex h-screen w-screen flex-col items-center justify-center p-10">
		<div
			class="bg-white/1 flex w-max max-w-[50vw] flex-col items-center justify-center gap-6 rounded-xl p-10 backdrop-blur-[0px] md:max-w-[50vw] md:p-14"
		>
			<Logo />
			<!-- <Button /> -->
		</div>
	</div>
</div>
