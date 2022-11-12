<script lang="ts">
	export let wide: boolean = false;
</script>

<div class="relative overflow-hidden overscroll-contain">
	{#if $$slots.background}
		<div class="absolute z-0 w-full h-full">
			<slot name="background" />
		</div>
	{/if}
	<div
		class="flex z-10 flex-col items-center mx-auto py-14 px-6 md:px-10 max-w-prose text-2xl gap-5"
		class:max-w-[75ch]={wide}
	>
		<slot />
	</div>
</div>
