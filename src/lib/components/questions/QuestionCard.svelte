<script lang='ts'>
	export let start_color: string;
	export let end_color: string;
	export let question: string;
	export let answer: string;

	export let open: boolean;
</script>

<div class='isolate flex flex-col gap-2 max-w-3xl w-full px-5'
		 on:click={() => open = !open}
		 style='--start-color: {start_color}; --end_color: {end_color}'>
	<!--	header-->
	<div class='flex flex-row items-center w-full p-2 pl-4 rounded-xl bg-[color:var(--start-color)]'>
		<p>{question}</p>
		<img
			alt=''
			class='w-4 ml-auto rotate-90 mix-blend-color-burn'
			class:rotate-0={open} src='/media/component_assets/question_card/triangle.svg' />
	</div>
	<!--	body-->
	{#if open}
		<div class='p-3 pl-4 rounded-xl' id='popout'>
			<p>{@html answer}</p>
		</div>
	{/if}
</div>

<style>
    #popout {
        background-image: linear-gradient(to bottom, var(--start-color), var(--end_color));
    }
</style>


