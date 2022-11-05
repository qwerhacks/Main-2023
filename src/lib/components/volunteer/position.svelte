<script lang="ts">
  export let title: string;
  export let bg_color: string;
</script>

  <div class="flex flex-col justify-center col-span-2 p-2">
    <h4 class="text-center">{title}</h4>
  </div>
  <div class="flex flex-col justify-center col-span-6 rounded-md px-8 py-5 ntcss-desc-bg" style="--ntcss-desc-bg: {bg_color}">
    <slot />
  </div>


<style>
  .ntcss-desc-bg {
    background-color: var(--ntcss-desc-bg);
  }
</style>