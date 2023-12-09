<script lang="ts">
	import WindowBase from '../utils/WindowBase.svelte';
	import Donate from './tab_content/Donate.svelte';
	import Sponsor from './tab_content/Sponsor.svelte';
	import Volunteer from './tab_content/Volunteer.svelte';

	const tabs = ['Sponsor', 'Donate', 'Volunteer'];

	let activeTab = 0;

	let url = '';

	$: {
		url = `https://QWERHacks.wiki/${tabs[activeTab].toLowerCase()}`;
	}

</script>

<WindowBase
	title=""
	background_val="linear-gradient(90deg, #A7DAFF 0.09%, #3757FF 100%);"
	main_bg_val="bg-[#E5D9E7]"
	max_width="max-w-[min(85ch,_95vw)]"
>
	<div slot="header" class="mt-8 flex flex-row px-2 sm:px-6 md:px-12 gap-4 sm:gap-6 md:gap-8 md:max-w-[80%]">
		{#each tabs as tab, i}
			<button
				class="normal-case flex-1 px-2 py-2 outline outline-[5px] outline-[#200B3A] relative bg-[#E5D9E7] font-fredoka font-medium text-lg xs:text-2xl special-shadow touch-auto pointer-events-auto"
				class:selected={i === activeTab}
				on:click={() => (activeTab = i)}
			>
				{tab}
			</button>
		{/each}
	</div>
	<div class="flex-row items-center gap-4 hidden md:flex">
		<img src="assets/donate/back.svg" alt="Back Arrow" class="aspect-square" />
		<img src="assets/donate/forward.svg" alt="Forward Arrow" class="aspect-square" />
		<img src="assets/donate/refresh.svg" alt="Refresh Button" class="aspect-square" />
		<div class="flex-grow border-4 border-[#200B3A] bg-white w-32 p-1 px-4 text-lg font-jetbrains">
			{url.toString()}
		</div>
	</div>

	<div class="flex flex-col">
		{#if activeTab === 0}
			<Sponsor />
		{:else if activeTab === 1}
			<Donate />
		{:else if activeTab === 2}
		<Volunteer />
		{/if}
	</div>
</WindowBase>

<style>
	.selected::after {
		content: '';
		position: absolute;
		bottom: -5px;
		left: 0;
		width: 100%;
		height: 5px;
		background: #e5d9e7;
	}

	.special-shadow {
		box-shadow:
			0px 0px 10px rgba(0, 0, 0, 0.25),
			0px -4px 10px rgba(0, 0, 0, 0.25);
	}
</style>
