<script lang="ts">
	import { onMount } from 'svelte';
	import Draggable from './Draggable.svelte';

	export let textCenter: boolean = false;

	let slotRef: HTMLElement;
	let draggableTargetRef: HTMLElement;
	let maximizeRef: HTMLElement;
	let closeRef: HTMLElement;

	let has_invis_div: boolean = false;

	onMount(() => {
		console.debug('slotRefWindow', slotRef);
	});

	export let title: string;
	export let background_val: string;
	export let main_bg_val: string = 'bg-white';
    export let style_str: string = '';
	export let max_width: string = 'max-w-prose';
	export let hide_buttons: boolean = false;
    export let dots: boolean = false;
	export let title_text_white: boolean = false;

    export let name: string | undefined = undefined;
</script>

<Draggable {draggableTargetRef} {maximizeRef} {slotRef} bind:has_invis_div {closeRef} name={name}>
    
        <div
		bind:this={slotRef}
		class="min-h-20 {main_bg_val} flex flex-col relative shadow-xl border-[5px] border-[#200B3A] pointer-events-auto {max_width} box"
		aria-hidden="true"
        >
            <div
                class="border-b-[5px] border-[#200B3A] cursor-grab"
                bind:this={draggableTargetRef}
                style="background: {background_val}; isolation: isolate;"
            >
                <slot name="header">
                    <div class="flex flex-row gap-2 text-3xl p-3">
                        <h4 class="font-jetbrains blk px-2 text-xl" class:text-white={title_text_white}>{title}</h4>
                        <button class="ml-auto" bind:this={maximizeRef} tabindex="-1" class:none={hide_buttons}>
                            <img src="assets/general/O.svg" class="aspect-square w-4" alt="Close icon" />
                        </button>
                        <button tabindex="-1" class:none={hide_buttons}>
                            <img src="assets/general/_.svg" class="aspect-square w-4" alt="Minimize icon" />
                        </button>
                        <button tabindex="-1" class:none={hide_buttons} class="mr-2 pointer-events-auto" bind:this={closeRef}>
                            <img src="assets/general/x.svg" class="aspect-square w-4" alt="Close icon" />
                        </button>
                    </div>
                </slot>
            </div>

            <div
                class="flex flex-col gap-2 p-4 md:p-8"
                class:items-center={textCenter}
                class:text-center={textCenter}
                style="{style_str}"
            >
                <slot />
            </div>
        </div>
</Draggable>

<style lang="scss">
    .blk {
		margin-block: 0;
		display: grid;
		align-items: center;
	}
    .box {
        box-shadow: 5px 5px 0px black;
    }
</style>
