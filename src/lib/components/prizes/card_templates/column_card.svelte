<script lang="ts">
	import GeneralCard from "../general_card.svelte";

  export let title: string;
</script>

<GeneralCard {title}>
  <div class="flex flex-row">
    <slot></slot>
  </div>
</GeneralCard>