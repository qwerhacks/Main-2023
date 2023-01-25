<script lang="ts">
	import { onMount } from 'svelte';
	import EventModal from './event_modal.svelte';

	import './schedule.scss';

	export let title: string;
	export let description: string | undefined;
	export let hour_start: number;
	export let minute_start: number;
	export let length_minutes: number;
	export let display_width: number;
	export let display_column: number;
	export let color: string;
	export let eventIsHovered: boolean;

	let state_title = title;
	let isModalOpen = false;

	function toggleModal() {
		isModalOpen = !isModalOpen;
	}

	onMount(() => {
		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				isModalOpen = false;
			}
		});
	});
</script>

<div
	on:click={() => toggleModal()}
	on:mouseover={() => {
		eventIsHovered = true;
	}}
	on:focus={() => {
		eventIsHovered = true;
	}}
	on:keydown={() => toggleModal()}
	on:mouseout={() => {
		eventIsHovered = false;
	}}
	on:blur={() => {
		eventIsHovered = false;
	}}
	class="event h{hour_start * 6 +
		Math.floor(minute_start / 10)} {color} w{display_width} l{Math.ceil(
		length_minutes / 10,
	)} c{display_column} {eventIsHovered
		? ' hovered'
		: ''} p-3 sm:p-4 md:p-5 break-all overflow-hidden cursor-pointer"
>
	{title}
</div>
{#if isModalOpen}
	<div on:click={() => toggleModal()} on:keydown={() => toggleModal()}>
		<EventModal {title} {description} {hour_start} {minute_start} {length_minutes} />
	</div>
{/if}
