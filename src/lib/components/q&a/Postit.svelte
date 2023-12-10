<script lang="ts">
	import WindowBase from "../utils/WindowBase.svelte";

  export let width: string = "max-w-[60ch]";
</script>

<WindowBase title="POST /IT" main_bg_val="bg-[#FDDE97]" background_val="bg-[#FDDE97]" max_width={width} dots={true}>
    <slot />
</WindowBase>