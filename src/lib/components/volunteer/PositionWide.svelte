<script lang="ts">
	export let title: string;
	export let bg_color: string;
</script>

<div class="col-span-2 flex flex-col justify-center p-2">
	<h4 class="text-center">{title}</h4>
</div>
<div
	class="ntcss-desc-bg col-span-6 flex flex-col justify-center rounded-md px-8 py-5"
	style="--ntcss-desc-bg: {bg_color}"
>
	<slot />
</div>

<style>
	.ntcss-desc-bg {
		background-color: var(--ntcss-desc-bg);
	}
</style>
