<script lang="ts">
	export let title: string;
	export let description: string | undefined;
	export let hour_start: number;
	export let minute_start: number;
	export let length_minutes: number;

	import { writable, type Writable } from 'svelte/store';
	export let modal_open = writable(false);

	import './schedule.scss';

	let time_start = `${(hour_start + 8) % 12 == 0 ? '12' : (hour_start + 8) % 12}:${
		minute_start < 10 ? '0' + minute_start : minute_start
	} ${(hour_start + 8) % 24 < 12 ? 'am' : 'pm'}`;
	let hour_end = hour_start + 8 + Math.floor((length_minutes + minute_start) / 60);
	let time_end = `${hour_end % 12 == 0 ? '12' : hour_end % 12}:${
		(minute_start + length_minutes) % 60 < 10
			? '0' + ((minute_start + length_minutes) % 60)
			: (minute_start + length_minutes) % 60
	} ${hour_end % 24 < 12 ? 'am' : 'pm'}`;
</script>

<div
	class="flex items-center justify-center fixed inset-0 z-[300] overflow-y-auto bg-white/1 backdrop-blur-[10px]"
	aria-modal="{$modal_open}" role="dialog"
	>
	<div class="max-w-[90%] lg:max-w-[60%] max-h-[80%]">
		<div class="container bg-bg sm:p-24 sm:pt-20 sm:pb-20 p-10"
    on:click={(e) => {
      e.stopPropagation()
    }}
    on:keydown={(e) => {
      console.log('keydown');
      if (e.key === 'Escape') {
        $modal_open = false;
      }
    }}>
			<h3>{title}</h3>
			<span>{time_start} to {time_end}</span>
			{#if description !== undefined}
				<p>{description}</p>
			{/if}
		</div>
	</div>
</div>

<style>
	.container {
		border-radius: 1rem;
		display: flex;
		flex-direction: column;
		z-index: 199 !important;
		outline: solid 1px black;
	}
</style>
