<script lang="ts">

	let timeUntil = new Date('January 2, 2024 00:00 GMT-08').getTime() - Date.now();
	setInterval(() => {
		timeUntil = new Date('January 2, 2024 00:00 GMT-08').getTime() - Date.now();
	}, 1000)

</script>

<div class="bg-lavender fixed bottom-0 left-0 z-[200] w-full h-[80px] px-4 py-10 flex align-center whiteborder">
	<div class="flex flex-row line w-[100%]" role="navigation">
		<div class="flex flex-row items-center gap-1 sm:gap-2 md:gap-2">
			<a href="/">home</a>
			<a href="/mission">mission</a>
			<a href="/resources">resources</a>
		</div>
		<div class="flex flex-row items-center">
			<a class="apply" href="/apply">{timeUntil}</a>
		</div>
	</div>
</div>

<style lang="scss">
	@import 'src/app.scss';
	.offset {
		box-shadow: #200B3A 4px 4px 0px;
	}
	.whiteborder {
		border-top: solid 4px white;
	}
	a {
		@include retro-button;
	}
	.line {
		justify-content: space-between;
	}
</style>