<script lang="ts">
</script>

<div class="relative w-full">
	{#if $$slots.background}
		<div class="absolute z-1 w-full h-full overflow-hidden overscroll-contain">
			<slot name="background" />
		</div>
	{/if}
	<div class="flex justify-center">
		<div
			class="grid grid-cols-5 z-10 items-center justify-center w-full px-5 py-1 sm:py-5 max-w-xl text-2xl gap-4 sm:gap-7"
		>
			<slot />
		</div>
	</div>
</div>
