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
			question: 'where is it?',
			answer:
				'Carnsdale Commons at UCLA - <a class="underline" href="https://goo.gl/maps/9zUegz42XzzPcjYk8">251 Charles E Young Drive West, Los Angeles, CA 90095</a>. If you\'re a UCLA student, it\'s the building right above BPlate. See you there!!',
			start_color: '#FDDE97',
			end_color: '#D5E8CC',
		},
		{
			question: 'who can come?',
			answer: `Anyone who is 18 or older, a member (or ally) of the LGBTQIA+ community, and enrolled in a postsecondary academic institution is invited to participate! The event will be at UCLA in Los Angeles, so please keep travel in mind.`,
			start_color: '#D5E8CC',
			end_color: '#ACE0E6',
		},
		{
			question: 'how will teams work?',
			answer: `You can sign up as a team of up to four members. but make sure that all your team members submit an application! if you don’t have a team before the event, don’t worry! we will help you find fellow hackers once the event starts :^)`,
			start_color: '#ACE0E6',
			end_color: '#C1D3EC',
		},
		{
			question: 'what can i create?\n',
			answer: `Absolutely anything you want — websites, apps, UI, you name it! We encourage you to create a product that positively impacts the LGBTQIA+ community or any other underrepresented group in tech.`,
			start_color: '#C1D3EC',
			end_color: '#DFC2F8',
		},
		{
			question: 'how much does it cost?',
			answer: `It's free, babey!`,
			start_color: '#DFC2F8',
			end_color: '#E19FC6',
		},
		{
			question: 'can allies attend?',
			answer: `Yes! We welcome anyone who supports our mission of increasing the visibility of our community in tech :)`,
			start_color: '#E19FC6',
			end_color: '#FDDE97',
		},
		{
			question: 'sounds great, how can i apply?',
			answer:
				'Go <a href="https://tinyurl.com/QWERHacks23" class="underline">here</a> or click the apply button up above! Just fill out the Google form and you are good to go.',
			start_color: '#FDDE97',
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
