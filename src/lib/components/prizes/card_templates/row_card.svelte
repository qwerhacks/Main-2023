<script lang="ts">
	import GeneralCard from "./general_card.svelte";

  export let title: string;
</script>

<GeneralCard {title}>
  <div class="flex flex-col">
    <div class="flex flex-row justify-center items-center p-3 gap-3">
      <slot name="row-1"></slot>
    </div>
    <div class="flex flex-row justify-center items-center p-3 gap-3">
      <slot name="row-2"></slot>
    </div>
  </div>
</GeneralCard>