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
	<h2>our mission</h2>
	<p class="max-w-prose text-center text-2xl z-10">
		QWER Hacks aims to <b class="font-black">mobilize</b> and bring together LGBTQIA+ individuals
		and allies to <b class="font-black">uplift</b> marginalized communities, while
		<b class="font-black">celebrating</b>
		authenticity, <b class="font-black">promoting</b> inclusivity, and
		<b class="font-black">enabling</b> shared prosperity.
	</p>
</Content>
