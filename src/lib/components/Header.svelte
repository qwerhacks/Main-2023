<script lang="ts">
	import RetroButton from './utils/RetroButton.svelte';

	let timeUntil = new Date('January 2, 2024 00:00 GMT-08').getTime() - Date.now();
	setInterval(() => {
		timeUntil = new Date('January 2, 2024 00:00 GMT-08').getTime() - Date.now();
	}, 1000);
</script>

<div
	class="bg-lavender fixed bottom-0 left-0 z-[200] w-full h-[80px] px-4 py-10 flex align-center whiteborder"
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
			<a class="apply" href="/apply">{timeUntil}</a>
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
