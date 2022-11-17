<script lang='ts'>
	import Content from '$lib/components/general/content.svelte';
	import QuestionCard from '$lib/components/questions/QuestionCard.svelte';

	type Question = {
		question: string;
		answer: string;
		start_color: string;
		end_color: string;
	};

	const questions: Question[] = [
		{
			question: 'who can come?',
			answer: `anyone who is 18 or older, a member (or ally) of the LGBTQIA+ community, and enrolled in a postsecondary academic institution is invited to participate!`,
			start_color: '#D5E8CC',
			end_color: '#c4e9ed',
		},
		{
			question: 'how will teams work?',
			answer: `you can sign up as a team of up to four members. but make sure that all your team members submit an application! if you don’t have a team before the event, don’t worry! we will help you find fellow hackers once the event starts :^)`,
			start_color: '#c4e9ed',
			end_color: '#cde1fe',
		},
		{
			question: 'what can i create?\n',
			answer: `absolutely anything you want –– websites, apps, UI, you name it! we encourage you to create a product that positively impacts the LGBTQIA+ community or any other underrepresented group in tech.`,
			start_color: '#cde1fe',
			end_color: '#e7d1fa',
		},
		{
			question: 'how much does it cost?',
			answer: `it's free, babey!`,
			start_color: '#e7d1fa',
			end_color: '#fbd0e8',
		},
		{
			question: 'can allies attend?',
			answer: `yes! we welcome anyone who supports our mission of increasing the visibility of our community in tech :)`,
			start_color: '#fbd0e8',
			end_color: '#feefcd',
		},
		{
			question: 'sounds great, how can i apply?',
			answer:
				'go <a href="https://tinyurl.com/QWERHacks23" class="underline">here</a> or click the apply button up above! just fill out the Google form and you are good to go.',
			start_color: '#feefcd',
			end_color: '#D5E8CC',
		},
	];

</script>

<Content>
	<h2>questions?</h2>
	<h3 class='mt-[-1rem]'>we've got answers!</h3>

	{#each questions as { question, answer, start_color, end_color } (question)}
		<QuestionCard {question} {answer} {start_color} {end_color} />
	{/each}
</Content>
