<script lang="ts">
	export let showBenevityInfo: (() => void);

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
		<img src="assets/donate/laughing.jpeg" alt="Three individuals in a room with a nonbinary flag in the background. The person on the left is holding a smartphone, the central individual is laughing with clasped hands, and the person on the right is covering their mouth with their hand. They are wearing similar white event t-shirts and lanyards. A water bottle and some papers are on a table in the foreground." />
		<div class="text-center max-w-md">
			<h4 class="text-lg">> What did you like most about QWER Hacks?</h4>
			<p style="font: 400 15px/120% 'JetBrainsMono', sans-serif">
				“I loved connecting with the students and hearing the passion in their voices as they shared
				their projects and ideas to improve the quality of life for the LGBTQIA+ community through
				technology!”
			</p>
			<p class="mt-2 font-fugaz">-Past hacker 🧡</p>
		</div>
	</div>
	<div class="flex-[3_1_0] flex flex-col gap-8 items-start justify-between">
		<p class="" style="font: 400 16px/120% 'JetBrainsMono', sans-serif">
			As a student-run hackathon, <b>QWER Hacks relies on the generosity</b> of companies and individual
			<b>donors like you</b>! Your donations make it possible for us to host an incredible hackathon that
			fosters a safe space centered around queer joy, development for social good, and connection!
		</p>
		{#each details as detail}
			<div class="flex flex-col gap-1 items-start">
				<h4 class="normal-case font-fugaz font-normal text-2xl">{detail.title}</h4>
				<p
					class="normal-case font-jetbrains max-w-prose"
					style="font: 400 16px/120% 'JetBrainsMono', sans-serif"
				>
					{@html detail.description}
				</p>
			</div>
		{/each}
	</div>
</div>
<div class="mt-8 grid grid-cols-1 md:grid-cols-[1fr_50px_1fr] gap-8 justify-between items-center">
	<div class="font-jetbrains text-center">
		Your company have Benevity?
		<br>
		<button
			on:click={() => (showBenevityInfo())}
			class="italic underline">Go here (they'll match you)</button
		>
	</div>
	<div class="hidden md:block">
		<p class="text-center">OR</p>
	</div>
	<div class="font-jetbrains text-center">
		Otherwise: <a
			href="mailto:sponsor@qwerhacks.org"
			class="font-extrabold italic underline">Go here</a
		> (both are tax deductable!)
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