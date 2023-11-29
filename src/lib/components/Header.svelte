<script lang="ts">
	import { onMount, tick } from 'svelte';
	import RetroButton from './utils/RetroButton.svelte';
	
	let applicationsOpenTime = new Date('January 2, 2024 00:00 GMT-08').getTime()
	const seconds = 1000;
	const minutes = seconds * 60;
	const hours = minutes * 60;
	const days = hours * 24;
	let timeUntil = applicationsOpenTime - Date.now();
	setInterval(() => {
		timeUntil = applicationsOpenTime - Date.now();
		let d = timeUntil / days;
		timeUntil = timeUntil % days;
		let h = timeUntil / hours;
		timeUntil = timeUntil % hours;
		let m = timeUntil / minutes;
		timeUntil = timeUntil % minutes;
		let s = timeUntil / seconds;
		timeUntil = timeUntil % seconds;
		timeUntil = `${Math.floor(d)}:${formatTwoDigit(Math.floor(h))}:${formatTwoDigit(Math.floor(m))}:${formatTwoDigit(Math.floor(s))}`
	}, 1000);

	const formatTwoDigit = (n: number) => {
		return n < 10 ? `0${n}` : `${n}`;
	}

	export let height: number = 0;

	let headerElement: HTMLElement;
	
	onMount(() => {
		tick().then(() => {
			height = headerElement.offsetHeight;
		});
		
		window.addEventListener('resize', () => {
			height = headerElement.offsetHeight;
		});

		return () => {
			window.removeEventListener('resize', () => {
				height = headerElement.offsetHeight;
			});
		};
	});
</script>

<div
	class="bg-lavender fixed bottom-0 left-0 z-[200] w-full h-[80px] px-4 py-10 flex align-center whiteborder"
	bind:this={headerElement}
>
	<div class="flex flex-row line w-[100%]" role="navigation">
		<div class="flex flex-row items-center gap-1 sm:gap-2 md:gap-2">
			<RetroButton>
				<a href="/">home</a>
			</RetroButton>
			<RetroButton>
				<a href="/mission">mission</a>
			</RetroButton>
			<RetroButton>
				<a href="/resources">resources</a>
			</RetroButton>
		</div>
		<div class="flex flex-row items-center">
			<RetroButton classList="active">
				<a class="apply" href="/apply">{timeUntil}</a>
			</RetroButton>
		</div>
	</div>
</div>

<style lang="scss">
	.whiteborder {
		border-top: solid 4px white;
	}
	.line {
		justify-content: space-between;
	}
</style>
