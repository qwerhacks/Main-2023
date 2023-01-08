<script lang="ts">
</script>

<div class="relative w-full">
	{#if $$slots.background}
		<div class="z-1 absolute h-full w-full overflow-hidden overscroll-contain">
			<slot name="background" />
		</div>
	{/if}
	<div class="flex justify-center">
		<div
			class="z-10 grid w-full max-w-xl grid-cols-5 items-center justify-center gap-4 px-2 py-1 text-2xl sm:gap-6 sm:py-5"
		>
			<slot />
		</div>
	</div>
</div>
