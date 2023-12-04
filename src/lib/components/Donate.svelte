<script lang="ts">
	import TabMenu from './donate/TabMenu.svelte';
import WindowBase from './utils/WindowBase.svelte';
</script>

<div class="w-full pl-24 pr-24 flex flex-col items-center">
	<WindowBase
		title=""
		textCenter={true}
		background_val="linear-gradient(90deg, #3A0B75 0.09%, #CC8FF8 100%);"
    max_width="max-w-fit"
	>
		<h2 class="text-5xl uppercase">Help make qwerhacks a success!</h2>
	</WindowBase>

  <TabMenu>
    
  </TabMenu>
</div>
