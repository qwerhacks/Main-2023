<script lang="ts" context="module">
	import type { ComponentType } from "svelte";
	import { writable, type Writable } from "svelte/store";


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

<slot />

<div
  class="flex items-center justify-center fixed inset-0 z-[190] overflow-y-auto bg-white/1 backdrop-blur-[10px]"
  class:hidden={!$modal_open}
  on:click={() => {console.log("closing modal");$modal_open = false}}
  on:keydown={(e) => {
    console.log("keydown")
    if (e.key === "Escape") {
      $modal_open = false;
    }
  }}
>
  <div class="max-w-[90%] sm:max-w-[60%] max-h-[80%]">
    <svelte:component this={component_to_display} props={component_to_display_props} />
  </div>
</div>

