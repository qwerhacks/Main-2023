<script lang="ts">
	export let title: string;
	export let bg_color: string;

	let open = false;
</script>

<div class="flex flex-col gap-4" on:click={() => open = !open}>
	<h4 class="text-center underline active:underline-offset-4" class:underline-offset-4={open}>{title}</h4>
	{#if open}
		<div
			class="flex flex-col justify-center col-span-6 rounded-md px-8 py-5 ntcss-desc-bg"
			style="--ntcss-desc-bg: {bg_color}"
		>
			<slot />
		</div>
	{/if}
</div>

<style>
	.ntcss-desc-bg {
		background-color: var(--ntcss-desc-bg);
	}
</style>
