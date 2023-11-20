<!-- A button with a hard, non-rounded 2-tone border where the top & left is #F3E1FF and the bottom and right sides are #3A0B75 -->
<script lang="ts">
	export let inverted = false;
  export let prepressed = false;

	let colors = {
		default: '#F3E1FF #3A0B75 #3A0B75 #F3E1FF',
		activated: '#3A0B75 #F3E1FF #F3E1FF #3A0B75'
	} as const;


  let default_color = colors[inverted ? 'activated' : 'default'];
  let activated_color = colors[!inverted ? 'activated' : 'default'];

  if (prepressed) {
    default_color = activated_color;
  }
</script>

<button
	on:click
	class="p-2 px-4"
  disabled={prepressed}
	style="--default-colors: {default_color}; --activated-colors: {activated_color};"
>
	<slot />
</button>

<style>
	button {
		border-color: var(--default-colors);
		border-width: 4px;
		border-style: solid;
		background-color: #b582da;
    box-sizing: border-box;
	}

	button:active {
		/* Flip the colors */
		border-color: var(--activated-colors);
	}
</style>
