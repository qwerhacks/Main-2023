<script lang="ts">
  export let track_title: string;
</script>

<div class="flex flex-col w-full">
  <h3 class="text-center">{track_title}</h3>
  <div class="grid grid-cols-3 w-full gap-2">
    <slot />
  </div>
</div>