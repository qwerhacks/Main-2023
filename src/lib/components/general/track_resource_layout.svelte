<div class="relative overflow-hidden overscroll-contain">
	{#if $$slots.background}
			<slot name="background" />
	{/if}
	<div
		class="z-10 mx-auto flex max-w-[97%] flex-col items-center gap-5 py-14 px-6 text-2xl md:px-10"
	>
		<slot />
	</div>
</div>
