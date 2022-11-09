<script lang="ts">
	import ButtonSmall from "$lib/components/hero/button_small.svelte";

</script>

<div class="p-4 fixed top-0 left-0 w-full z-20 bg-white/1 backdrop-blur-[20px]">
	<div class="flex flex-row  gap-2 justify-center sm:gap-4 md:justify-start md:mx-40 md:gap-10 items-center">
		<a href="/"><img class="h-8" src="/media/2023_logo.svg" alt="A frog, on top of the letters QH. The QWER Hacks Logo."/></a>
		<a class="text-xl font-nunito" href="/" >Home</a>
		<a class="text-xl font-nunito" href="/mission">Mission</a>
		<a class="text-xl font-nunito" href="/resources">Resources</a>
		<div class="ml-auto">
			<ButtonSmall />
		</div>
	</div>
</div>
