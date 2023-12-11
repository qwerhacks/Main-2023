<script lang="ts">
	export let classList = '';
</script>

<button class="{classList} col-span-1 aspect-square calculator-button font-jetbrains">
	<slot />
</button>

<style lang="scss">
	// Top left should be #FFF6DE for both layers
	// Bottom right should be #FFDE8C then #FFCD4D
	.calculator-button {
		border: 2px solid;
		border-bottom-color: #ffde8c;
		border-right-color: #ffde8c;
		border-top-color: #fff6de;
		border-left-color: #fff6de;
		position: relative;
		&::after {
			content: '';
			position: absolute;
			top: -4px;
			left: -4px;
			bottom: -4px;
			right: -4px;
			border: 2px solid;
			border-bottom-color: #ffcd4d;
			border-right-color: #ffcd4d;
			border-top-color: #fff6de;
			border-left-color: #fff6de;
		}

		&:active {
			border-bottom-color: #fff6de;
			border-right-color: #fff6de;
			border-top-color: #ffcd4d;
			border-left-color: #ffcd4d;
			&::after {
				border-bottom-color: #fff6de;
				border-right-color: #fff6de;
				border-top-color: #ffde8c;
				border-left-color: #ffde8c;
			}
		}
		transition: border 0.05s ease-in-out;
		cursor: pointer;
	}
</style>
