<script lang="ts" context="module">
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	type Prideflag = 'trans' | 'lesbian' | 'rainbow' | 'bi';

	export interface PersonDatum {
		name: string;
		url: string;
		pronouns?: string;
		prideflag?: Prideflag;
	}
</script>

<script lang="ts">
	import Background from '../hero/background.svelte';

	export let datum: PersonDatum;
	let rotate_normal = false;

	onMount(() => {
		rotate_normal = Math.random() > 0.5;
	});

	let hover = false;

	function startHover() {
		hover = true;
	}

	function endHover() {
		hover = false;
	}

	const hover_thing = rotate_normal ? 200 : -200;
</script>

<div
	on:mouseenter={startHover}
	on:mouseleave={endHover}
	on:focusin={startHover}
	on:focusout={endHover}
	class="rounded-full relative overflow-clip"
>
	<img class="rounded-full" src={datum.url} alt={datum.name} />
	{#if hover}
		<div
			in:fly={{ y: hover_thing, duration: 200 }}
			out:fly={{ y: hover_thing, duration: 500 }}
			class="absolute flex flex-col top-[60%] h-[40%] p-1 bg-white/70 backdrop-blur-sm"
			class:rotate_normal
			class:rotate_unnormal={!rotate_normal}
			class:no_pronouns={datum.pronouns === undefined}
			class:transpridegradient={datum.prideflag === 'trans'}
			class:lesbianpridegradient={datum.prideflag === 'lesbian'}
			class:pridegradient={datum.prideflag === 'rainbow'}
			class:bipridegradient={datum.prideflag === 'bi'}
		>
			<p class="text-center text-base md:text-lg leading-1">{datum.name.split(' ')[0]}</p>
			{#if datum.pronouns !== undefined}
				<p class="text-center text-sm md:text-base  leading-1">{datum.pronouns}</p>
			{/if}
		</div>
	{/if}
</div>

<style lang="postcss">
	.rotate_normal {
		--tw-rotate: 12deg;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
		left: -15px;
		right: 0px;
	}
	.rotate_unnormal {
		--tw-rotate: -12deg;
		transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate))
			skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x))
			scaleY(var(--tw-scale-y));
		left: 0px;
		right: -15px;
	}

	.no_pronouns {
		@apply top-[65%] justify-center p-1 pb-4;
	}

	.transpridegradient {
		background: rgb(91, 206, 250);
		background: linear-gradient(
			90deg,
			rgba(91, 206, 250, 0.7) 0%,
			rgba(255, 255, 255, 0.7) 40%,
			rgba(255, 255, 255, 0.7) 60%,
			rgba(245, 169, 184, 0.7) 100%
		);
	}

	.lesbianpridegradient {
		background: linear-gradient(
			to right,
			rgba(213, 44, 0, 0.8),
			rgba(226, 150, 136, 0.8),
			rgba(255, 255, 255, 0.8) 45%,
			rgba(255, 255, 255, 0.8),
			rgba(255, 255, 255, 0.8) 55%,
			rgba(210, 127, 164, 0.8),
			rgba(162, 2, 98, 0.8)
		);
	}

	.pridegradient {
		background: rgb(91, 206, 250);
		background: linear-gradient(
			to right,
			rgba(237, 34, 36, 0.4),
			rgba(243, 91, 34, 0.4),
			rgba(249, 150, 33, 0.4),
			rgba(245, 193, 30, 0.4),
			rgba(241, 235, 27, 0.4) 27%,
			rgba(241, 235, 27, 0.4),
			rgba(241, 235, 27, 0.4) 33%,
			rgba(99, 199, 32, 0.4),
			rgba(12, 155, 73, 0.4),
			rgba(33, 135, 141, 0.4),
			rgba(57, 84, 165, 0.4),
			rgba(97, 55, 155, 0.4),
			rgba(147, 40, 142, 0.4)
		);
	}

	.bipridegradient {
    color: white;
		background: linear-gradient(
			to right,
			rgba(255, 0, 128, 0.4),
			rgba(200, 37, 157, 0.4),
			rgba(140, 71, 153, 0.4),
			rgba(68, 46, 159, 0.4),
			rgba(0, 50, 16, 0.4)
		);
	}
</style>
