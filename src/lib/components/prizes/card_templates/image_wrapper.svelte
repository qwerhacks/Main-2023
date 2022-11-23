<script lang="ts">
  export let src: string;
  export let alt: string;
  export let bg_color: string = "rgba(1,0,0,1)";
</script>

<div class="bg-[color:var(--bg-color)] rounded-xl h-full p-2" style:--bg-color={bg_color}>
  <img {src} {alt}>
</div>