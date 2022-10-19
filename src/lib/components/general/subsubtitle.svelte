<script lang="ts">
  type JustifySelfOptions = "justify-self-auto" | "justify-self-start" | "justify-self-end" | "justify-self-center" | "justify-self-stretch";
  export let justify_self: JustifySelfOptions = "justify-self-auto";

  type AlignSelfOptions = "self-auto" | "self-start" | "self-end" | "self-center" | "self-stretch" | "self-baseline"
  export let align_self: AlignSelfOptions = "self-auto"
</script>

<h1 class="text-2xl lowercase {justify_self} {align_self} pl-5"><slot/></h1>
