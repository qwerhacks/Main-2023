<script lang="ts">
</script>

<div
	class="flex flex-row items-center justify-center border-4 border-solid border-[#200B3A] bg-white w-fit"
>
	<slot />
</div>

<style lang="scss">
	div {
		filter: drop-shadow(4px 6px 0px #200b3a);
	}
	div:active {
		filter: none;
    transform: translateY(2px) translateX(2px);
	}
</style>
