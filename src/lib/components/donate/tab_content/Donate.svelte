<script lang="ts">
	interface Details {
		title: string;
		description: string;
	}
	const details: Details[] = [
		{
			title: '👑 Make a Tax-Deductible Donation to QWER Hacks!!',
			description: `Donate to us using our Hack Club Donor portal!
        <br>
If your company uses Benevity for company matching, <a>donate to our campaign</a>, and your company will match your donation!`
		},
		{
			title: '🙋 Where does your donation go?',
			description:
				'We realize the type of community fostered at QWER Hacks is not something that exists everywhere. As part of our commitment to accessibility, we hope to provide travel grants to hackers that live outside of the Los Angeles metro area! Your donation could <b>help send a queer person to their first (queer) hackathon</b> and jump-start their journey in tech!'
		}
	];
</script>

<div class="flex flex-row justify-start mt-4 items-center gap-4">
	<img class="hidden lg:block" src="assets/donate/wiki_logo.svg" alt="QWER Hacks Wiki Logo" />
	<div class="flex flex-col flex-grow">
		<h3 class="normal-case text-3xl text-center">
			<span class="line"><span class="text-gradient">Donate to QWER Hacks!!</span></span>
		</h3>
	</div>
</div>
<div class="flex md:flex-row flex-col gap-12 mt-8 items-center">
	<div
		class="flex-[2_1_0] md:border-solid md:border-black md:border-[3px] md:p-10 flex flex-col gap-4 items-center relative max-w-prose h-min"
	>
		<img src="assets/donate/speaker.png" />
		<div class="text-center max-w-md">
			<h4 class="text-lg">> What did you like most about QWER Hacks?</h4>
			<p style="font: 400 15px/120% 'JetBrainsMono-Regular', sans-serif">
				“I loved connecting with the students and hearing the passion in their voices as they shared
				their projects and ideas to improve the quality of life for the LGBTQIA+ community through
				technology!”
			</p>
			<p class="mt-2 font-fugaz">-Past hacker 🧡</p>
		</div>
	</div>
	<div class="flex-[3_1_0] flex flex-col gap-8 items-start justify-between">
		<p class="" style="font: 400 16px/120% 'JetBrainsMono-Regular', sans-serif">
			As a student-run hackathon, <b>QWER Hacks relies on the generosity</b> of companies and individual
			<b>donors like you</b>! Your donations make it possible for us to host an incredible hackathon that
			fosters a safe space centered around queer joy, development for social good, and connection!
		</p>
		{#each details as detail}
			<div class="flex flex-col gap-1 items-start">
				<h4 class="normal-case font-fugaz font-normal text-2xl">{detail.title}</h4>
				<p
					class="normal-case font-jetbrains max-w-prose"
					style="font: 400 16px/120% 'JetBrainsMono-Regular', sans-serif"
				>
					{@html detail.description}
				</p>
			</div>
		{/each}
	</div>
</div>

<style>
	.text-gradient {
		background: linear-gradient(270deg, #387f9e 0.09%, #4d48e3 100%);
    background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	span.line {
		display: inline-block;
	}
</style>