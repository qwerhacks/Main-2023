<script lang="ts">
	import Content from "../../general/content.svelte";

  export let title: string;
</script>

<Content>
  <h2>{title}</h2>
  
  <slot></slot>
</Content>