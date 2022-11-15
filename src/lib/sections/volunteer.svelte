<script lang="ts">
	import Content from '$lib/components/general/content.svelte';
	import PositionWide from '$lib/components/volunteer/PositionWide.svelte';
	import QuestionCard from '$lib/components/questions/QuestionCard.svelte';

	let windowWidth: number;

	const positions: [string, string, string][] = [
		[
			'workshop leads',
			'Have a passion in any technical or identity specific topics? We’d love to have YOU lead a workshop! Topics can be intro to web development, how to be a good ally, resume building, diversity in industry, or anything else relevant to our hackathon!',
			'rgba(171, 215, 162, 128)',
		],
		[
			'technical mentors',
			'Sometimes our hackers will get lost while creating their hacks! Sign up to help them with programming languages and debugging!',
			'rgba(89, 198, 215, 0.5)',
		],
		[
			'identiy specific mentors',
			'Not only are we a hackathon, but we’d also like to build a community. In order to do this, we would love to have YOU be an identity specific mentor. This includes anyone identifying as bi/pan/omni, queer + questioning, and trans and gender non-conforming!',
			'rgba(130, 172, 226, 0.5)',
		],
		[
			'judges',
			'Love seeing hack creations? We’d love you to help us judge submissions based on predetermined criteria and choose our hackathon winners!',
			'rgba(151, 71, 255, 0.31)',
		],
		[
			'in person volunteers',
			'To make sure our hackathon goes smoothly, we’ll need volunteers to help with setup and maintenance of the in-person portion of the hackathon! This includes setting up the room, checking people in and helping participants find their places.',
			'rgba(194, 69, 150, 0.4)',
		],
	];
</script>

<svelte:window bind:innerWidth={windowWidth} />

<Content wide={windowWidth > 768}>
	<div class="z-10 flex flex-col items-center gap-5 w-full">
		<h2>volunteer for qwerhacks!</h2>
		<p>(we have free food!)</p>
		{#if windowWidth > 768}
<!--			wide mode -->
			<div class="grid grid-cols-8 gap-7">
				{#each positions as [title, description, color]}
					<PositionWide {title} bg_color={color}>
						<p class="text-lg">{@html description}</p>
					</PositionWide>
				{/each}
			</div>
		{:else}
<!--			narrow mode-->
			<div class="flex flex-col gap-5 py-8 w-full">
				{#each positions as [title, description, color]}
					<QuestionCard start_color={color} end_color={color} question={title} answer={description} />
				{/each}
			</div>
		{/if}
		<a
			class="rounded-md bg-[#FDDE97] px-10 py-4 hover:bg-[#fee3a5] active:bg-[#ffeab8]"
			href="https://forms.gle/ViXR2qANhuFsFptK9"
		>
			<p>Apply to be a colaborator here!</p>
		</a>
	</div>

	<div slot="background" class="z-0">
		<span class="absolute left-0 bottom-0 hidden md:inline-block">
			<img class="w-8/12" src="./media/component_assets/media/BottomLeft.svg" alt="" />
		</span>
		<img
			class="absolute right-0 bottom-0 max-w-[70%]"
			src="./media/component_assets/media/BottomRight.svg"
			alt=""
		/>
		<span class="absolute left-0 top-0 inline-block">
			<img class="w-8/12" src="./media/component_assets/media/topleft.svg" alt="" />
		</span>
		<img
			class="absolute right-0 top-0 max-w-[70%]"
			src="./media/component_assets/media/TopRight.svg"
			alt=""
			style="  direction: rtl;			"
		/>
	</div>
</Content>
