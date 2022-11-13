<script lang="ts">
	import ButtonSmall from '$lib/components/hero/button_small.svelte';
</script>

<div class="bg-white/1 fixed top-0 left-0 z-20 w-full p-4 backdrop-blur-[20px]">
	<div
		class="flex flex-row  items-center justify-center gap-2 sm:gap-4 md:mx-40 md:justify-start md:gap-10"
	>
		<a href="/"
			><img
				class="h-8"
				src="/media/2023_logo.svg"
				alt="A frog, on top of the letters QH. The QWER Hacks Logo."
			/></a
		>
		<a class="font-nunito text-xl" href="/">Home</a>
		<a class="font-nunito text-xl" href="/mission">Mission</a>
		<a class="font-nunito text-xl" href="/resources">Resources</a>
		<div class="ml-auto">
			<ButtonSmall />
		</div>
	</div>
</div>
