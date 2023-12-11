<script lang="ts">
	interface Details {
		title?: string;
		description: string;
	}
	const details: Details[] = [
		{
			title: '✏️ Workshop Leads ✏️',
			description:
				"Host a technical, identity-specific, or creative workshop. Here's some ideas we'd love to see YOU bring to life: <a href='https://bit.ly/qwerhacks-workshop-ideas' class='italics underline'>qwerhacks-workshop-ideas</a>. Sign up if you're passionate about helping beginners with anything technical or crafty, or are a member of the LGBTQIA+ community and want to share experiences and advice ❤️"
		},
		{
			title: '🖥 Technical Mentors 🖥',
			description: 'Offer technical guidance for hackathon attendees on the day-of.'
		},
		{
			title: '🌈 Identity Specific Mentors 🌈',
			description:
				'Mentor bi/pan/omni, queer + questioning, and trans and gender non-conforming hackers.'
		},
		{
			title: '🥇 Judges 🥇',
			description: 'Judge submissions based on predetermined criteria and choose hackathon winners.'
		},
		{
			title: '🔨 Volunteers 🔨',
			description: 'Help with setup and maintenance of the in-person portion of the hackathon.'
		}
	];
</script>

<div class="flex flex-row justify-start mt-4 items-center gap-4">
	<img class="hidden lg:block" src="assets/donate/wiki_logo.svg" alt="QWER Hacks Wiki Logo" />
	<div class="flex flex-col flex-grow">
		<h3 class="hidden md:block normal-case text-3xl text-center">
			<span class="line">Interested in</span>
			<span class="line"><span class="text-gradient">volunteering for QWERHacks</span>?</span>
		</h3>
		<h3 class="md:hidden normal-case text-3xl text-center">
			Interested in <span class="text-gradient">Volunteering</span>?
		</h3>
		<h4 class="hidden md:block normal-case font-fredoka font-normal text-lg sm:text-xl text-center">
			We’re Looking for Individuals who want to make a difference in their community!
		</h4>
	</div>
</div>
<div class="flex md:flex-row flex-col gap-12 mt-8 items-center">
	<div class="flex-[3_1_0] flex flex-col gap-4 items-start justify-between">
		{#each details as detail}
			<div class="flex flex-col gap-1 items-start">
				{#if detail.title}
					<h4 class="normal-case font-fugaz font-normal text-2xl">{detail.title}</h4>
				{/if}
				<p
					class="normal-case font-jetbrains max-w-prose"
					style="font: 400 16px/120% 'JetBrainsMono', sans-serif"
				>
					{@html detail.description}
				</p>
			</div>
		{/each}
	</div>
	<div
		class="flex-[2_1_0] md:border-solid md:border-black md:border-[3px] md:p-10 flex flex-col gap-4 items-center relative max-w-prose h-min"
	>
		<img
			src="assets/donate/volunteer.jpeg"
			alt="Three people posing with crossed arms in front of a colorful banner with abstract designs. From left to right: a person with a beard and long hair, wearing a navy shirt; a person with curly shoulder-length hair in a white T-shirt with a blue frog graphic; and a person with short wavy hair in a grey sweater. They all appear cheerful."
		/>
		<div class="text-center max-w-md">
			<p style="font: 400 15px/120% 'JetBrainsMono', sans-serif">
				“I loved connecting with the students and hearing the passion in their voices as they shared
				their projects and ideas to improve the quality of life for the LGBTQIA+ community through
				technology!”
			</p>
			<p class="mt-2 font-fugaz">-Past QWER Hacks Company Sponsor</p>
		</div>
	</div>
</div>
<div class="mt-8 flex flex-row justify-center items-center">
	<div class="font-jetbrains text-center">
		<a
			href="https://docs.google.com/forms/d/1jwJGgcg5spSpB5snfbMJrX0BIHKrWPKLKcKFCO8QFhw/viewform?edit_requested=true"
			class="font-extrabold italic underline"
		>
			Apply here!!
		</a>
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
