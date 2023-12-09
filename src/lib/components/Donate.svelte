<script lang="ts">
	import Calculator from './donate/Calculator.svelte';
	import TabMenu from './donate/TabMenu.svelte';
	import ShortcutIcon from './utils/ShortcutIcon.svelte';
	import WindowBase from './utils/WindowBase.svelte';

	let showCalculator = false;
</script>

<div class="w-full px-6 flex flex-col items-center pb-24 relative">
	<div class="mb-10">
		<div class="flex flex-row gap-6 md:gap-12 sm:mr-8 sm:ml-4">
			<WindowBase
				title="Alert!"
				textCenter={true}
				background_val="linear-gradient(90deg, #3A0B75 0.09%, #CC8FF8 100%);"
				max_width="max-w-prose"
				title_text_white={true}
			>
				<h2 class="text-5xl uppercase">Help make qwerhacks a success!</h2>
			</WindowBase>

			<div class="hidden sm:block">
				<ShortcutIcon
					title="Donation<br>Calculator"
					src="assets/donate/calculator.svg"
					alt="calculator icon"
					onclick={() => (showCalculator = true)}
				/>
			</div>
		</div>
	</div>

	<TabMenu></TabMenu>

	{#if showCalculator}
		<div class="absolute right-1/4 top-32 z-50">
			<Calculator />
		</div>
	{/if}
</div>
