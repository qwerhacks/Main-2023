<script lang="ts">
	import Contact from '$lib/components/footer/contact.svelte';
	import Sitemap from '$lib/components/footer/sitemap.svelte';
	import Content from '$lib/components/general/content.svelte';
</script>

<div class="relative w-full overflow-hidden overscroll-contain">
	<!-- Background -->
	<!--<div class="absolute z-0 h-full w-full">
		<span class="absolute left-10 bottom-0 inline-block">
			<img class="w-8/12" src="./media/component_assets/media/BottomLeft.svg" alt="" />
		</span>
	</div>-->

	<!-- Foreground -->
	<div class="z-10 mx-auto flex w-full flex-col items-center gap-5 text-2xl">
		<div
			class="bg-white/1 grid grid-rows-2 justify-center gap-10 py-5 px-24 md:px-40 backdrop-blur-[20px] sm:grid-cols-3 sm:grid-rows-1 lg:px-48"
		>
			<!-- Frog -->
			<img
				src="media/frog.svg"
				alt="A stylized frog"
				class="hidden h-32 justify-self-end sm:block"
			/>
			<!-- Contact -->
			<Contact />
			<!-- Links -->
			<Sitemap />
		</div>
	</div>
</div>
