<script lang="ts">
	import WindowBase from '../utils/WindowBase.svelte';

	const tabs = ['Sponsor', 'Donate', 'Volunteer'];

	let activeTab = 0;

	let url = '';

	$: {
		url = `https://QWERHacks.wiki/${tabs[activeTab].toLowerCase()}`;
	}

	interface Details {
		title: string;
		description: string;
	}

	const details: Details[] = [
		{
			title: '🤝 Connect Students to Your Company!',
			description:
				'Form connections with up-and-coming tech talent at the #1 Public University in the United States! Our hackers build projects that teach them to collaboratively ideate, adapt quickly, iterate, and problem-solve at the intersections of diverse viewpoints - skills that would make them valuable contributors to your organization!'
		},
		{
			title: '📊 Boost Recognition of Your Products!',
			description:
				'Demo your products and APIs to 200+ hackers. Empower hackers to integrate your product into their projects!'
		},
		{
			title: '🌟 Empower Marginalized Groups in Tech!',
			description:
				'Support our mission of celebrating the LGBTQIA+ community in tech and spread the message that queer and trans individuals do belong in tech and have the support to thrive!'
		}
	];
</script>

<WindowBase
	title=""
	background_val="linear-gradient(90deg, #A7DAFF 0.09%, #3757FF 100%);"
	main_bg_val="bg-[#E5D9E7]"
	max_width="none"
>
	<div slot="header" class="mt-8 flex flex-row pl-12 gap-8 pr-48">
		{#each tabs as tab, i}
			<button
				class="normal-case px-20 py-2 outline outline-[5px] outline-[#200B3A] relative bg-[#E5D9E7] font-fredoka font-medium text-2xl special-shadow"
				class:selected={i === activeTab}
				on:click={() => (activeTab = i)}
			>
				{tab}
			</button>
		{/each}
	</div>
	<div class="flex flex-row items-center gap-4">
		<img src="assets/donate/back.svg" alt="Back Arrow" class="aspect-square" />
		<img src="assets/donate/forward.svg" alt="Forward Arrow" class="aspect-square" />
		<img src="assets/donate/refresh.svg" alt="Refresh Button" class="aspect-square" />
		<div class="flex-grow border-4 border-[#200B3A] bg-white p-1 px-4 text-lg font-jetbrains">
			{url.toString()}
		</div>
	</div>

	<div class="flex flex-col">
		{#if activeTab === 0}
			<div class="flex flex-row mt-4 items-center gap-4">
				<img src="assets/donate/wiki_logo.svg" alt="QWER Hacks Wiki Logo" />
				<div class="flex flex-col items-center">
					<h3 class="normal-case text-3xl">
						Why should your company <span class="text-gradient">sponsor QWER Hacks</span>?
					</h3>
					<h4 class="normal-case font-fredoka font-normal text-xl">
						We’re Looking for Companies Who Strive to Empower the LGBTQIA+ Community!
					</h4>
				</div>
			</div>
			<div class="grid md:grid-cols-[3fr,2fr] grid-rows-2 gap-12 mt-8">
				<div class="flex flex-col gap-8 items-start justify-between">
					{#each details as detail}
						<div class="flex flex-col gap-1 items-start">
							<h4 class="normal-case font-fugaz font-normal text-2xl">{detail.title}</h4>
							<p
								class="normal-case font-jetbrains"
								style="font: 400 18px/120% 'JetBrainsMono-Regular', sans-serif"
							>
								{detail.description}
							</p>
						</div>
					{/each}
				</div>
				<div
					class="border-solid border-black border-[3px] p-10 flex flex-col gap-4 items-center relative"
				>
					<img src="assets/donate/speaker.png" />
					<div class="text-center">
						<p style="font: 400 15px/120% 'JetBrainsMono-Regular', sans-serif">
							“I loved connecting with the students and hearing the passion in their voices as they
							shared their projects and ideas to improve the quality of life for the LGBTQIA+
							community through technology!”
						</p>
						<p class="mt-2 font-fugaz">-Past QWER Hacks Company Sponsor</p>
					</div>
				</div>
			</div>
		{:else if activeTab === 1}
			<h2 class="text-6xl">Donate to qwerhacks</h2>
		{:else if activeTab === 2}
			<h2 class="text-6xl">Volunteer for qwerhacks</h2>
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

	.text-gradient {
		background: linear-gradient(90deg, #92deff 0.09%, #4d48e3 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
</style>
