<script lang="ts">
	export let start_color: string;
	export let end_color: string;
	export let question: string;
	export let answer: string;

	let open: boolean;

	let clean_question = question.replace(/\s+/g, '-').toLowerCase();
</script>

<!-- Accessability reference: https://www.w3.org/WAI/ARIA/apg/example-index/accordion/accordion#top -->

<div
	class="flex flex-col gap-2 max-w-3xl w-full px-5"
	style="--start-color: {start_color}; --end_color: {end_color}"
>
	<button
		id={`button-${clean_question}`}
		class="isolate umami--click--{question.replace(/\s+/g, '-').toLowerCase()}"
		aria-expanded={open}
		aria-controls={`popout-${clean_question}`}
		on:click={() => (open = !open)}
	>
		<!--	header-->
		<div
			class="flex flex-row items-center w-full p-2 pl-4 rounded-xl bg-[color:var(--start-color)]"
		>
			<h4 class="text-xl">{question}</h4>
			<img
				alt=""
				class="w-4 ml-auto rotate-90 mix-blend-color-burn"
				class:rotate-0={open}
				src="/media/component_assets/question_card/triangle.svg"
			/>
		</div>
	</button>
	<!--	body-->
	{#if open}
		<div
			class="p-3 pl-4 rounded-xl popout"
			id={`popuot-${clean_question}`}
			role="region"
			aria-labelledby={`button-${clean_question}`}
		>
			<p>{@html answer}</p>
		</div>
	{/if}
</div>

<style>
	.popout {
		background-image: linear-gradient(to bottom, var(--start-color), var(--end_color));
	}
</style>
