<script context="module" lang="ts">
	import type {ComponentType} from "svelte";
	import {writable} from "svelte/store";
	import { fade } from 'svelte/transition';

	export let modal_open = writable(false);
	export let component_to_display: ComponentType | undefined = undefined;
	export let component_to_display_props: Array<any> | undefined = undefined;

	export function openModal(component: ComponentType, props: Array<any>) {
		modal_open.set(true);
		component_to_display = component;
		component_to_display_props = props;
		console.log("modal has opened itself")
	}
</script>

<script lang="ts">
	$: {
		console.log("modal_open: ", $modal_open)
		console.log("component_to_display: ", component_to_display?.name)
	}
</script>

<slot/>

{#if $modal_open}
	<div
					transition:fade={{duration: 50}}
					class="flex items-center justify-center fixed inset-0 z-[300] overflow-y-auto bg-white/1 backdrop-blur-[10px]"
					on:click={() => {$modal_open = false}}
					on:keydown={(e) => {
    if (e.key === "Escape") {
      $modal_open = false;
    }
  }}
	>
		<div class="max-w-[90%] sm:max-w-[60%] max-h-[80%]">
			<svelte:component this={component_to_display}
												props={component_to_display_props}
												aria-modal="{$modal_open}" role="dialog"/>
		</div>
	</div>
{/if}


