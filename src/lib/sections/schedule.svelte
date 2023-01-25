<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	import Event from '../components/schedule/event.svelte';
	import '../components/schedule/schedule.scss';

	type Event = {
		title: string;
		description?: string;
		hour_start: number;
		minute_start: number;
		length_minutes: number;
		display_width: number;
		display_column: number;
		color: string;
	};

	const events: Event[] = [
		{
			title: 'Check-In',
			description: "Meet us at <olace>. Culpa labore cupidatat et dolor mollit consectetur elit aliqua elit eu laborum anim exercitation irure fugiat est amet duis tempor aute magna aute occaecat adipisicing proident exercitation consequat reprehenderit incididunt quis laborum velit non pariatur ea irure dolore enim sunt ullamco occaecat culpa commodo duis laboris enim eu reprehenderit aute eiusmod laborum occaecat cupidatat ad mollit non anim do sunt enim esse et eu irure incididunt deserunt enim excepteur minim culpa non sint dolore cillum duis do ipsum eu et Lorem occaecat non sit velit et culpa commodo non non amet laboris sit ex quis laborum et Lorem magna consequat.",
			hour_start: 0,
			minute_start: 0,
			length_minutes: 60,
			display_width: 3,
			display_column: 0,
			color: 'green',
		},
		{
			title: 'Breakfast/Snacks',
			hour_start: 0,
			minute_start: 30,
			length_minutes: 30,
			display_width: 1,
			display_column: 1,
			color: 'blue',
		},
		{
			title: 'Opening Presentation',
			hour_start: 1,
			minute_start: 0,
			length_minutes: 60,
			display_width: 3,
			display_column: 0,
			color: 'coral',
		},
		{
			title: 'Track Speaker -- Food Security',
			hour_start: 2,
			minute_start: 0,
			length_minutes: 20,
			display_width: 2,
			display_column: 0,
			color: 'blue',
		},
		{
			title: 'Track Speaker -- Housing Access',
			hour_start: 2,
			minute_start: 20,
			length_minutes: 20,
			display_width: 2,
			display_column: 1,
			color: 'green',
		},
		{
			title: 'Track Speaker -- Healthcare Equity',
			hour_start: 2,
			minute_start: 40,
			length_minutes: 20,
			display_width: 2,
			display_column: 0,
			color: 'coral',
		},
		{
			title: 'Hacking Begins',
			hour_start: 3,
			minute_start: 0,
			length_minutes: 10,
			display_width: 3,
			display_column: 0,
			color: 'yellow',
		},
		{
			title: 'Hackathon Survival Guide & Team Formation',
			hour_start: 3,
			minute_start: 0,
			length_minutes: 45,
			display_width: 2,
			display_column: 1,
			color: 'coral',
		},
		{
			title: 'Git / Version Control',
			hour_start: 3,
			minute_start: 45,
			length_minutes: 45,
			display_width: 1,
			display_column: 0,
			color: 'blue',
		},
		{
			title: 'MLH Mini Event 1',
			hour_start: 3,
			minute_start: 45,
			length_minutes: 45,
			display_width: 1,
			display_column: 2,
			color: 'yellow',
		},
		{
			title: 'Intro to React',
			hour_start: 4,
			minute_start: 30,
			length_minutes: 60,
			display_width: 2,
			display_column: 1,
			color: 'coral',
		},
		{
			title: 'Lunch',
			hour_start: 5,
			minute_start: 0,
			length_minutes: 75,
			display_width: 3,
			display_column: 0,
			color: 'green',
		},
		{
			title: 'MLH Mini Event 2',
			hour_start: 6,
			minute_start: 15,
			length_minutes: 30,
			display_width: 1,
			display_column: 2,
			color: 'yellow',
		},
		{
			title: 'Python',
			hour_start: 6,
			minute_start: 45,
			length_minutes: 45,
			display_width: 2,
			display_column: 0,
			color: 'coral',
		},
		// {
		//     title: 'TBD',
		//     hour_start: 6,
		//     minute_start: 45,
		//     length_minutes: 45,
		//     display_width: 2,
		//     display_column: 0,
		//     color: 'coral',
		// },
		{
			title: 'Snacks',
			hour_start: 8,
			minute_start: 0,
			length_minutes: 60,
			display_width: 2,
			display_column: 0,
			color: 'green',
		},
		{
			title: 'Careers in Game Dev',
			hour_start: 8,
			minute_start: 0,
			length_minutes: 60,
			display_width: 2,
			display_column: 1,
			color: 'coral',
		},
		{
			title: 'Impostor Syndrome',
			hour_start: 9,
			minute_start: 0,
			length_minutes: 30,
			display_width: 2,
			display_column: 0,
			color: 'blue',
		},
		{
			title: 'Thinking Traps and Beyond',
			hour_start: 9,
			minute_start: 30,
			length_minutes: 30,
			display_width: 2,
			display_column: 0,
			color: 'yellow',
		},
		{
			title: 'CTF',
			hour_start: 10,
			minute_start: 0,
			length_minutes: 60,
			display_width: 3,
			display_column: 0,
			color: 'coral',
		},
		{
			title: 'Dinner',
			hour_start: 11,
			minute_start: 0,
			length_minutes: 60,
			display_width: 3,
			display_column: 0,
			color: 'green',
		},
		{
			title: 'Intro to Deep Learning',
			hour_start: 12,
			minute_start: 0,
			length_minutes: 60,
			display_width: 2,
			display_column: 1,
			color: 'yellow',
		},
		{
			title: 'Identity Specific Workshop 1',
			hour_start: 13,
			minute_start: 0,
			length_minutes: 60,
			display_width: 2,
			display_column: 0,
			color: 'coral',
		},
		{
			title: 'Snacks',
			hour_start: 15,
			minute_start: 0,
			length_minutes: 60,
			display_width: 3,
			display_column: 0,
			color: 'green',
		},
		{
			title: 'Tie Dye',
			hour_start: 15,
			minute_start: 0,
			length_minutes: 120,
			display_width: 1,
			display_column: 2,
			color: 'yellow',
		},
		{
			title: 'Movie',
			hour_start: 15,
			minute_start: 0,
			length_minutes: 180,
			display_width: 1,
			display_column: 1,
			color: 'coral',
		},
		{
			title: 'Breakfast',
			hour_start: 24,
			minute_start: 30,
			length_minutes: 60,
			display_width: 3,
			display_column: 0,
			color: 'yellow',
		},
		{
			title: 'Pitching (by QWER Hacks Team)',
			hour_start: 25,
			minute_start: 30,
			length_minutes: 30,
			display_width: 2,
			display_column: 0,
			color: 'green',
		},
		{
			title: 'Devpost Submission Due',
			hour_start: 26,
			minute_start: 0,
			length_minutes: 10,
			display_width: 3,
			display_column: 0,
			color: 'blue',
		},
		{
			title: 'Hacking Ends',
			hour_start: 27,
			minute_start: 0,
			length_minutes: 10,
			display_width: 3,
			display_column: 0,
			color: 'coral',
		},
		{
			title: 'Identity Specific Workshop 2',
			hour_start: 27,
			minute_start: 0,
			length_minutes: 30,
			display_width: 1,
			display_column: 1,
			color: 'yellow',
		},
		{
			title: 'Judging',
			hour_start: 27,
			minute_start: 30,
			length_minutes: 120,
			display_width: 3,
			display_column: 0,
			color: 'green',
		},
		{
			title: 'Tie-dye, Just dance',
			hour_start: 27,
			minute_start: 0,
			length_minutes: 90,
			display_width: 1,
			display_column: 2,
			color: 'blue',
		},
		{
			title: 'Closing Presentation',
			hour_start: 30,
			minute_start: 0,
			length_minutes: 30,
			display_width: 3,
			display_column: 0,
			color: 'yellow',
		},
	];

	const hours = [
		{ index: 0, string: '8am' },
		{ index: 1, string: '9am' },
		{ index: 2, string: '10am' },
		{ index: 3, string: '11am' },
		{ index: 4, string: '12pm' },
		{ index: 5, string: '1pm' },
		{ index: 6, string: '2pm' },
		{ index: 7, string: '3pm' },
		{ index: 8, string: '4pm' },
		{ index: 9, string: '5pm' },
		{ index: 10, string: '6pm' },
		{ index: 11, string: '7pm' },
		{ index: 12, string: '8pm' },
		{ index: 13, string: '9pm' },
		{ index: 14, string: '10pm' },
		{ index: 15, string: '11pm' },
		{ index: 16, string: '12am' },
		{ index: 17, string: '1am' },
		{ index: 18, string: '2am' },
		{ index: 19, string: '3am' },
		{ index: 20, string: '4am' },
		{ index: 21, string: '5am' },
		{ index: 22, string: '6am' },
		{ index: 23, string: '7am' },
		{ index: 24, string: '8am' },
		{ index: 25, string: '9am' },
		{ index: 26, string: '10am' },
		{ index: 27, string: '11am' },
		{ index: 28, string: '12pm' },
		{ index: 29, string: '1pm' },
		{ index: 30, string: '2pm' },
	];

	let eventIsHovered = false;
	let trackerTime = 0;
	let content: HTMLDivElement;

	function updateTrackerTime() {
		let startDate = new Date('January 27, 2023 08:00 GMT-08');        // Use this time in prod
		// let startDate = new Date(`January 24, 2023 08:00 GMT-08`);
		let currentDateTime = Date.now();
		let timeSinceStartHours = currentDateTime - startDate.getTime();
		timeSinceStartHours /= 1000 * 60 * 60; // milliseconds per hour
		let timeSinceStartTenMinutes = Math.floor(timeSinceStartHours * 6);

		// jump to current time on pageload
		if (content) {
			console.log(content);
			content.scroll({ top: timeSinceStartTenMinutes * 150 * (1 / 6) - 130, behavior: 'smooth' });
		}
		trackerTime = timeSinceStartTenMinutes;
		return null;
	}

	let interval: number;

	updateTrackerTime();

	onMount(() => {
		updateTrackerTime();

		// update tracker every 10 minutes
		interval = setInterval(() => {
			if (!eventIsHovered) {
				trackerTime += 1;
				content.scrollTop = trackerTime * 150 * (1 / 6) - 100;
			}
		}, 1000 * 60 * 10) as unknown as number;
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="schedule-container" on:loadstart={updateTrackerTime()} on:mouseup>
	<div class="header">
		<h2>day of events</h2>
	</div>
	<div class="content h-20" id="schedule-content" bind:this={content}>
		{#each hours as hour}
			<div class="spacer h{hour.index * 6}"><span>{hour.string}</span></div>
			<div class="spacer h{hour.index * 6} half" />
		{/each}
		<div class="events">
			{#each events as event}
				<Event
					title={event.title}
					description={event.description}
					hour_start={event.hour_start}
					minute_start={event.minute_start}
					length_minutes={event.length_minutes}
					display_width={event.display_width}
					display_column={event.display_column}
					color={event.color}
					{eventIsHovered}
				/>
			{/each}
		</div>
		<div class="tracker h{trackerTime} {trackerTime < 0 ? ' hidden' : ''}">
			<div class="circle" />
		</div>
	</div>
</div>
