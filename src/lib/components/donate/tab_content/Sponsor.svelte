<script lang="ts">
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

<div class="flex flex-row justify-start mt-4 items-center gap-4">
	<img class="hidden lg:block" src="assets/donate/wiki_logo.svg" alt="QWER Hacks Wiki Logo" />
	<div class="flex flex-col flex-grow">
		<h3 class="hidden md:block normal-case text-3xl text-center">
			<span class="line">Why should your company</span>
			<span class="line"><span class="text-gradient">sponsor QWER Hacks</span>?</span>
		</h3>
		<h3 class="md:hidden normal-case text-3xl text-center">
			Why sponsor <span class="text-gradient">QWERHacks</span>?
		</h3>
		<h4 class="hidden md:block normal-case font-fredoka font-normal text-lg sm:text-xl text-center">
			We’re Looking for Companies Who Strive to Empower the LGBTQIA+ Community!
		</h4>
	</div>
</div>
<div class="flex md:flex-row flex-col gap-12 mt-8 items-center">
	<div class="flex-[3_1_0] flex flex-col gap-8 items-start justify-between">
		{#each details as detail}
			<div class="flex flex-col gap-1 items-start">
				<h4 class="normal-case font-fugaz font-normal text-2xl">{detail.title}</h4>
				<p
					class="normal-case font-jetbrains max-w-prose"
					style="font: 400 18px/120% 'JetBrainsMono-Regular', sans-serif"
				>
					{detail.description}
				</p>
			</div>
		{/each}
	</div>
	<div
		class="flex-[2_1_0] md:border-solid md:border-black md:border-[3px] md:p-10 flex flex-col gap-4 items-center relative max-w-prose h-min"
	>
		<img
			src="assets/donate/speaker.jpg"
			alt="Three people posing with crossed arms in front of a colorful banner with abstract designs. From left to right: a person with a beard and long hair, wearing a navy shirt; a person with curly shoulder-length hair in a white T-shirt with a blue frog graphic; and a person with short wavy hair in a grey sweater. They all appear cheerful."
		/>
		<div class="text-center max-w-md">
			<p style="font: 400 15px/120% 'JetBrainsMono-Regular', sans-serif">
				“I loved connecting with the students and hearing the passion in their voices as they shared
				their projects and ideas to improve the quality of life for the LGBTQIA+ community through
				technology!”
			</p>
			<p class="mt-2 font-fugaz">-Past QWER Hacks Company Sponsor</p>
		</div>
	</div>
</div>
<div class="mt-8 grid grid-cols-1 md:grid-cols-[1fr_50px_1fr] gap-8 justify-between items-center">
	<div class="font-jetbrains text-center">
		Need more info?
		<br>
		<a
			href="https://drive.google.com/file/d/1bEVtQlb4Yw58R0a8gH0P0BWTpXJEpXQC/view"
			class="italic underline">Read our sponsorship packet</a
		>
	</div>
	<div class="hidden md:block">
		<p class="text-center">OR</p>
	</div>
	<div class="font-jetbrains text-center">
		Ready to sponsor? Email us at: <a
			href="mailto:sponsor@qwerhacks.org"
			class="font-extrabold italic underline">sponsor@qwerhacks.org</a
		>
	</div>
</div>

<style>
	.text-gradient {
		background: linear-gradient(90deg, #387f9e 0.09%, #4d48e3 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	span.line {
		display: inline-block;
	}
</style>
