<script lang="ts">
	import Background from '$lib/components/hero/background.svelte';
	import Button from '$lib/components/hero/button.svelte';
	import Logo from '$lib/components/hero/logo.svelte';
</script>

<div class="w-full h-100vw overflow-hidden overscroll-contain relative">
	<div id="background" class="absolute w-full h-full z-0">
		<Background />
	</div>
	<div id="content" class="z-10 flex flex-col items-center justify-center w-screen h-screen p-10">
		<div
			class="flex flex-col justify-center items-center gap-6 bg-white/1 backdrop-blur-[20px] p-10 md:p-14 rounded-xl w-max max-w-[85vw] md:max-w-[70vw]"
		>
			<Logo />
			<Button />
		</div>
	</div>
</div>
