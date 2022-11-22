<script lang="ts">
	import Background from '$lib/components/hero/background.svelte';

	export let title: string;
</script>

<div class="h-40vh relative w-full overflow-hidden overscroll-contain">
	<div id="background" class="absolute z-0 h-full w-full">
		<Background />
	</div>
	<div id="content" class="z-10 flex h-[40vh] w-screen flex-col items-center justify-center p-10">
		<div
			class="bg-white/1 flex w-full max-w-[95vw] flex-col items-center justify-center gap-6 rounded-xl p-5 backdrop-blur-[20px] md:max-w-[70vw] md:p-10"
		>
			<h1 class="text-6xl text-center">{title}</h1>
		</div>
	</div>
</div>
