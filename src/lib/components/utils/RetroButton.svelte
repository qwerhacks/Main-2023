<script lang="ts">
	export let classList = '';
	export let pressed: boolean = false;
</script>

<div class="{classList} retro-button" class:pressed>
	<slot />
</div>

<style lang="scss">
	.pressed {
		border-bottom-color: white;
		border-right-color: white;
		border-top-color: #3a0b75;
		border-left-color: #3a0b75;
	}

	.retro-button {
		padding: 3px 20px;
		border: solid 4px;
		border-left-color: white;
		border-top-color: white;
		border-bottom-color: #3a0b75;
		border-right-color: #3a0b75;
		font-family: 'Reactor7', monospace;
		color: white;
		@apply text-2xl;
		&:active {
			border-bottom-color: white;
			border-right-color: white;
			border-top-color: #3a0b75;
			border-left-color: #3a0b75;
		}
		&.active {
			border-bottom-color: white;
			border-right-color: white;
			border-top-color: #3a0b75;
			border-left-color: #3a0b75;
		}
		transition: border 0.15s ease;
		cursor: pointer;
	}
</style>
