<script lang="ts">
  export let title: string;
</script>

  <div class="flex flex-col justify-center col-span-1 p-2 ">
    <h4 class="text-center">{title}</h4>
  </div>
  <div class="flex flex-col justify-center col-span-3 bg-green-400 rounded-md p-2">
    <slot />
  </div>
