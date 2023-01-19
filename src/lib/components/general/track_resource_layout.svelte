<div class="relative overflow-hidden overscroll-contain">
	{#if $$slots.background}
			<slot name="background" />
	{/if}
	<div
		class="z-10 mx-auto flex w-[95%] max-w-[1300px] flex-col items-center gap-5 py-14 px-6 text-2xl md:px-10"
	>
		<slot />
	</div>
</div>
