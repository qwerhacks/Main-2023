<script lang="ts">
	import Button from "$lib/components/Button.svelte";
import WindowInstance from "$lib/components/WindowInstance.svelte";

</script>
<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>


<WindowInstance/>
<WindowInstance/>
<WindowInstance/>

<Button prepressed={true}>
  Click me  
</Button>