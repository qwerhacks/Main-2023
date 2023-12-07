<script lang="ts">
	let array = Array(1000);
</script>

<div
	class="h-full w-full grid grid-cols-[repeat(auto-fill,_minmax(70px,1fr))] grid-rows-flow-dense gradient isolate"
>
	{#each array as i}
		<div class="aspect-square border-t-4 border-l-4 border-solid border-[#A84FB3] outer opacity-20" />
	{/each}
</div>

<style>
	.gradient {
		background: linear-gradient(180deg, #180230 0%, #A84FB3 100%);
		background-size: 100px;
	}
	.outer {
		/* mix-blend-mode: difference; */
	}
</style>
