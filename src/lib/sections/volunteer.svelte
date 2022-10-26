<script lang="ts">
	import Content from '$lib/components/general/content.svelte';
	import Position from '$lib/components/volunteer/position.svelte';

	const positions: [string, string][] = [
		[
			'workshop leads',
			'know something fun, interesting, or cool you can teach? want to raise awareness about an identity? <br>help us host a workshop or talk! all ideas welcome, please fill out the form below and we may be in touch!',
		],
		['technical mentors', 'technical mentors'],
		['identiy specific mentors', 'identity specific mentors'],
		[
			'judges',
			'interested in a low-time-commitment way to help out? help us judge submissions and give out fun prizes!',
		],
		[
			'in person volunteers',
			'all hands on deck! we need people to help with event logistics, from space setup and teardown to helping make sure hackers are fed. come help out and be a part of the team!',
		],
	];
</script>

<Content>
	<h2>volunteer for qwerhacks!</h2>
	<p>(we have free food!)</p>
	<div class="grid grid-cols-4 gap-4">
		{#each positions as [title, description] }
			<!-- content here -->
			<Position {title}>
				<p>{@html description}</p>
			</Position>
		{/each}
	</div>
</Content>
