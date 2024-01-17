<script lang="ts">
	import ProgressWindow from './ProgressWindow.svelte';
	import SponsorWindow from './SponsorWindow.svelte';
	import Draggable from './utils/Draggable.svelte';
	import WindowBase from './utils/WindowBase.svelte';
	let slotRef: HTMLElement;
	let draggableTargetRef: HTMLElement;
	let maximizeRef: HTMLElement;

	let has_invis_div: boolean = false;
</script>

<div>
	<SponsorWindow
		title="Bronze Sponsors"
		textCenter={true}
		background_val="linear-gradient(90deg, #75ABE7 0%, #F1A4E5 100%)"
		max_width="max-w-lg"
		options={false}
	></SponsorWindow>
</div>
