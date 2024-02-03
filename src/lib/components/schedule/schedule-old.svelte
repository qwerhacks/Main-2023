<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	import Event from './event.svelte';
	//import '../components/schedule/schedule.scss';

	const ColorMap = {
		food: 'green',
		workshop: 'lightblue',
		talk: 'coral',
		fun: 'yellow',
		other: 'plum'
	} as const;

	type Categories = keyof typeof ColorMap;
	type Colors = (typeof ColorMap)[Categories];

	type EventType = {
		title: string;
		description?: string;
		location?: 'hermosa room' | 'main room' | string;
		hour_start: number;
		minute_start: number;
		length_minutes: number;
		display_width: number;
		display_column: number;
		category: Categories;
	};

	const events: EventType[] = [
		{
			title: 'Check-In',
			description: `Checkin starts now!`,
			location: ``,
			hour_start: 1,
			minute_start: 0,
			length_minutes: 60,
			display_width: 2,
			display_column: 0,
			category: 'other'
		},
		{
			title: 'Dinner',
			description: ``,
			location: ``,
			hour_start: 1,
			minute_start: 0,
			length_minutes: 60,
			display_width: 1,
			display_column: 2,
			category: 'food'
		},
		{
			title: 'Opening Presentation',
			description: ``,
			location: ``,
			hour_start: 2,
			minute_start: 0,
			length_minutes: 40,
			display_width: 2,
			display_column: 0,
			category: 'other'
		},
		{
			title: 'Keynote (Rochelle Diamond)',
			description: ``,
			location: ``,
			hour_start: 2,
			minute_start: 40,
			length_minutes: 20,
			display_width: 3,
			display_column: 0,
			category: 'talk'
		},
		{
			title: 'Health Equity (Danielle Ehsanipour)',
			description: ``,
			location: ``,
			hour_start: 3,
			minute_start: 0,
			length_minutes: 20,
			display_width: 3,
			display_column: 0,
			category: 'talk'
		},
		{
			title: 'Sustainability (Annie Chien)',
			description: ``,
			location: ``,
			hour_start: 3,
			minute_start: 20,
			length_minutes: 20,
			display_width: 3,
			display_column: 0,
			category: 'talk'
		},
		{
			title: 'Art & Technology (Shane Denson)',
			description: ``,
			location: ``,
			hour_start: 3,
			minute_start: 40,
			length_minutes: 20,
			display_width: 3,
			display_column: 0,
			category: 'talk'
		},
		{
			title: 'Outdoor Diversity Alliance Workshop',
			description: ``,
			location: ``,
			hour_start: 4,
			minute_start: 0,
			length_minutes: 30,
			display_width: 2,
			display_column: 0,
			category: 'workshop'
		},
		{
			title: 'Hackathon Survival Workshop',
			description: `"🚀🔧 Ready to elevate your hackathon game? Our Hackathon Survival Workshop is about to kick off in just 5 minutes! 🕒💡

⚙️🔥 Join us for insider tips, tricks, and hacks to navigate this coding adventure like a pro! From managing time efficiently to staying caffeinated, we've got your back. ☕💼

🎓 Plus, get pumped up for a Team Formation activity after! 🤝👩‍💻👨‍💻 If you haven't yet, assemble your dream team for the coding crusade! 🚀💻"`,
			location: ``,
			hour_start: 5,
			minute_start: 0,
			length_minutes: 30,
			display_width: 2,
			display_column: 1,
			category: 'workshop'
		},
		{
			title: 'Team Formation',
			description: ``,
			location: `Hermosa room!`,
			hour_start: 4,
			minute_start: 30,
			length_minutes: 30,
			display_width: 2,
			display_column: 0,
			category: 'other'
		},
		{
			title: 'HACKING BEGINS',
			description: ``,
			location: ``,
			hour_start: 5,
			minute_start: 0,
			length_minutes: 30,
			display_width: 1,
			display_column: 0,
			category: 'other'
		},
		{
			title: 'Creative Coding and Generative Art (Not AI)',
			description: ``,
			location: `Hermosa Room`,
			hour_start: 5,
			minute_start: 30,
			length_minutes: 60,
			display_width: 3,
			display_column: 0,
			category: 'workshop'
		},
		{
			title: 'Crafts!!1!',
			description: ``,
			location: ``,
			hour_start: 6,
			minute_start: 30,
			length_minutes: 90,
			display_width: 2,
			display_column: 0,
			category: 'fun'
		},
		{
			title: 'Breakfast',
			description: ``,
			location: ``,
			hour_start: 16,
			minute_start: 0,
			length_minutes: 60,
			display_width: 2,
			display_column: 0,
			category: 'food'
		},
		{
			title: 'Intro to Deep Learning',
			description: `given by ACM AI!`,
			location: ``,
			hour_start: 17,
			minute_start: 0,
			length_minutes: 60,
			display_width: 2,
			display_column: 0,
			category: 'workshop'
		},
		{
			title: 'Cloud Computing Workshop',
			description: `given by ACM Cloud!`,
			location: `Hermosa room!`,
			hour_start: 18,
			minute_start: 0,
			length_minutes: 60,
			display_width: 2,
			display_column: 1,
			category: 'workshop'
		},
		{
			title: 'Building a Portfolio',
			description: `presented by Katie from Out in Tech`,
			location: `Hermosa Room!`,
			hour_start: 19,
			minute_start: 0,
			length_minutes: 60,
			display_width: 2,
			display_column: 0,
			category: 'workshop'
		},
		{
			title: 'Lunch',
			description: ``,
			location: ``,
			hour_start: 21,
			minute_start: 0,
			length_minutes: 75,
			display_width: 2,
			display_column: 0,
			category: 'food'
		},
		{
			title: 'User Research',
			description: `presented by LA Blueprint`,
			location: ``,
			hour_start: 22,
			minute_start: 15,
			length_minutes: 45,
			display_width: 2,
			display_column: 1,
			category: 'workshop'
		},
		{
			title: 'Identity Panel',
			description: ``,
			location: ``,
			hour_start: 23,
			minute_start: 30,
			length_minutes: 60,
			display_width: 2,
			display_column: 0,
			category: 'talk'
		},
		{
			title: 'Cybersecurity & Privacy for Hackers',
			description: `presented by ACM Cyber`,
			location: `Hermosa Room`,
			hour_start: 24,
			minute_start: 30,
			length_minutes: 60,
			display_width: 2,
			display_column: 1,
			category: 'workshop'
		},
		{
			title: 'Incident Response Workshop',
			description: `presented by ACM Cyber x Crowdstrike`,
			location: ``,
			hour_start: 25,
			minute_start: 30,
			length_minutes: 60,
			display_width: 2,
			display_column: 0,
			category: 'workshop'
		},
		{
			title: 'Crochet!',
			description: `with Ruth`,
			location: ``,
			hour_start: 25,
			minute_start: 30,
			length_minutes: 60,
			display_width: 1,
			display_column: 2,
			category: 'fun'
		},
		{
			title: 'Dinner',
			description: ``,
			location: ``,
			hour_start: 27,
			minute_start: 30,
			length_minutes: 60,
			display_width: 2,
			display_column: 0,
			category: 'food'
		},
		{
			title: 'MLH Mini Event',
			description: ``,
			location: ``,
			hour_start: 29,
			minute_start: 0,
			length_minutes: 60,
			display_width: 3,
			display_column: 0,
			category: 'talk'
		},
		{
			title: 'CTF',
			description: ``,
			location: ``,
			hour_start: 30,
			minute_start: 0,
			length_minutes: 60,
			display_width: 2,
			display_column: 0,
			category: 'workshop'
		},
		{
			title: 'Snacks',
			description: ``,
			location: ``,
			hour_start: 31,
			minute_start: 0,
			length_minutes: 60,
			display_width: 1,
			display_column: 1,
			category: 'food'
		},
		{
			title: 'Tie Dye',
			description: ``,
			location: ``,
			hour_start: 31,
			minute_start: 0,
			length_minutes: 60,
			display_width: 1,
			display_column: 2,
			category: 'fun'
		},
		{
			title: 'Movie',
			description: ``,
			location: ``,
			hour_start: 31,
			minute_start: 0,
			length_minutes: 120,
			display_width: 1,
			display_column: 0,
			category: 'fun'
		},
		{
			title: 'Breakfast',
			description: ``,
			location: ``,
			hour_start: 40,
			minute_start: 30,
			length_minutes: 60,
			display_width: 2,
			display_column: 0,
			category: 'food'
		},
		{
			title: 'HACKING ENDS',
			description: ``,
			location: ``,
			hour_start: 41,
			minute_start: 30,
			length_minutes: 30,
			display_width: 1,
			display_column: 0,
			category: 'other'
		},
		{
			title: 'How to Pitch',
			description: ``,
			location: ``,
			hour_start: 41,
			minute_start: 30,
			length_minutes: 45,
			display_width: 2,
			display_column: 1,
			category: 'workshop'
		},
		{
			title: 'Live Demos',
			description: ``,
			location: ``,
			hour_start: 42,
			minute_start: 0,
			length_minutes: 60,
			display_width: 2,
			display_column: 0,
			category: 'other'
		},
		{
			title: 'Closing Presentation',
			description: ``,
			location: ``,
			hour_start: 43,
			minute_start: 30,
			length_minutes: 45,
			display_width: 3,
			display_column: 0,
			category: 'talk'
		}
	];

	interface Hour {
		index: number;
		string: string;
	}

	const hours: Hour[] = [
		{ index: 0, string: '4pm' },
		{ index: 1, string: '5pm' },
		{ index: 2, string: '6pm' },
		{ index: 3, string: '7pm' },
		{ index: 4, string: '8pm' },
		{ index: 5, string: '9pm' },
		{ index: 6, string: '10pm' },
		{ index: 7, string: '11pm' },
		{ index: 8, string: '12am' },
		{ index: 9, string: '1am' },
		{ index: 10, string: '2am' },
		{ index: 11, string: '3am' },
		{ index: 12, string: '4am' },
		{ index: 13, string: '5am' },
		{ index: 14, string: '6am' },
		{ index: 15, string: '7am' },
		{ index: 16, string: '8am' },
		{ index: 17, string: '9am' },
		{ index: 18, string: '10am' },
		{ index: 19, string: '11am' },
		{ index: 20, string: '12pm' },
		{ index: 21, string: '1pm' },
		{ index: 22, string: '2pm' },
		{ index: 23, string: '3pm' },
		{ index: 24, string: '4pm' },
		{ index: 25, string: '5pm' },
		{ index: 26, string: '6pm' },
		{ index: 27, string: '7pm' },
		{ index: 28, string: '8pm' },
		{ index: 29, string: '9pm' },
		{ index: 30, string: '10pm' },
		{ index: 31, string: '11pm' },
		{ index: 32, string: '12am' },
		{ index: 33, string: '1am' },
		{ index: 34, string: '2am' },
		{ index: 35, string: '3am' },
		{ index: 36, string: '4am' },
		{ index: 37, string: '5am' },
		{ index: 38, string: '6am' },
		{ index: 39, string: '7am' },
		{ index: 40, string: '8am' },
		{ index: 41, string: '9am' },
		{ index: 42, string: '10am' },
		{ index: 43, string: '11am' },
		{ index: 44, string: '12pm' },
		{ index: 45, string: '1pm' },
		{ index: 46, string: '2pm' },
		{ index: 47, string: '3pm' },
		{ index: 48, string: '4pm' },
		{ index: 49, string: '5pm' }
	];

	let eventIsHovered = false;
	let trackerTime = 0;
	let content: HTMLDivElement;

	let startDate = new Date('February 2, 2024 16:00 GMT-08');
	let endDate = new Date('February 4, 2024 22:00 GMT-08');
	let hackathonPassed = Date.now() > endDate.getTime();

	function updateTrackerTime() {
		// let startDate = new Date(`January 24, 2023 08:00 GMT-08`);
		let currentDateTime = Date.now();
		let timeSinceStartHours = currentDateTime - startDate.getTime();
		timeSinceStartHours /= 1000 * 60 * 60; // milliseconds per hour
		let timeSinceStartTenMinutes = Math.floor(timeSinceStartHours * 6);

		// jump to current time on pageload
		if (content && !hackathonPassed) {
			console.log(content);
			content.scroll({
				top: timeSinceStartTenMinutes * 150 * (1 / 6) - 130,
				behavior: 'smooth'
			});
		}
		trackerTime = timeSinceStartTenMinutes;
		return null;
	}

	let interval: number;

	updateTrackerTime();

	onMount(() => {
		updateTrackerTime();

		// update tracker every 10 minutes
		interval = setInterval(
			() => {
				if (!eventIsHovered) {
					trackerTime += 1;
					content.scrollTop = trackerTime * 150 * (1 / 6) - 100;
				}
			},
			1000 * 60 * 10
		) as unknown as number;
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<div class="schedule-container" on:loadstart={updateTrackerTime()} on:mouseup>
	<!-- <div class="header flex max-w-full flex-col items-center px-6 text-left">

		<div class="mt-2 flex max-w-full flex-row flex-wrap justify-center gap-x-4">
			{#each Object.entries(ColorMap) as [category, name]}
				<div class="category flex flex-row items-center gap-2">
					<div class="h-4 w-4 rounded-full {name} inline-block" />
					{category}
				</div>
			{/each}
		</div>
	</div> -->
	<div bind:this={content} class="content h-20" id="schedule-content">
		{#each hours as hour}
			<div class="spacer h{hour.index * 6}"><span>{hour.string}</span></div>
			<div class="spacer h{hour.index * 6} half" />
		{/each}
		<div class="events">
			{#each events as event}
				<Event
					title={event.title}
					description={event.description}
					location={event.location}
					hour_start={event.hour_start}
					minute_start={event.minute_start}
					length_minutes={event.length_minutes}
					display_width={event.display_width}
					display_column={event.display_column}
					color={ColorMap[event.category]}
					{eventIsHovered}
				/>
			{/each}
		</div>
		{#if !hackathonPassed}
			<div class="tracker h{trackerTime} {trackerTime < 0 ? ' hidden' : ''}">
				<div class="circle" />
			</div>
		{/if}
	</div>
</div>
