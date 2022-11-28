<script lang="ts">
	import Content from '$lib/components/general/content.svelte';
</script>

<Content>
	<div slot="background" class="z-0 w-full relative h-full">
		<span class="absolute left-0 top-5 inline-block max-w-[270px]">
			<img class="w-8/12" src="./media/component_assets/media/leftSide.svg" alt="" />
		</span>
		<img
			class="absolute right-0 top-10 inline-block max-w-[100px] z-2"
			src="./media/component_assets/media/right.svg"
			alt=""
			style="  direction: rtl;			"
		/>
	</div>
	<h2 class="bg-white/1 backdrop-blur-[20px] p-3 rounded-lg z-10">our mission</h2>
	<p class="bg-white/1 backdrop-blur-[20px] p-3 rounded-lg max-w-prose text-center text-2xl z-10">
		As UCLA's only LGBTQIA+ hackathon, QWER Hacks is an opportunity for all the girls, gays, theys
		and allies to showcase their passion for a better and more equal world! Trust me, you don't
		wanna miss it. APPLY NOW!
	</p>
</Content>
