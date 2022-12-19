<script lang="ts">
	import Content from '$lib/components/general/content.svelte';
	import Person from '$lib/components/who_we_are/person.svelte';
	import type { PersonDatum } from '$lib/components/who_we_are/person.svelte';

	const peopleData: PersonDatum[] = [
		{
			name: 'Margaret Capetz',
			url: 'https://lh4.googleusercontent.com/a-3FzhdPTNAVPU8KKLDBTwHJllV0GIuWMMK0tk15x5VaXCNWl9iyAAbxULuAVOcn868=w2400',
			pronouns: 'she/her',
			prideflag: "rainbow"
		},
		{
			name: 'Mia Luong',
			pronouns: 'she/her',
			prideflag: 'bi',
			url: 'https://lh6.googleusercontent.com/FRP4kIqpuc4SW8W74Q35oL-PY9MvJQWQ8b_VHzE6fJ0a5cbYN1loYFVTEFEl1Fu6qkc=w2400',
		},
		{
			name: 'Preyasi Gaur',
			pronouns: 'she/her',
			url: 'https://lh3.googleusercontent.com/2BsKtdoLpJhzKhFDR9Hg8bPXJR7hVR55FPfIbMsJrjsm7II9kvgXxDGeNoQKXNAS09g=w2400',
		},
		{
			name: 'Isabella He',
			pronouns: 'she/her',
			url: 'https://lh5.googleusercontent.com/cazOufNw-nIqjVZVMErBt87Lm16a9neEeYD55CpVHwbL-TKiXEGWvg7uaXTYYBxmNG8=w2400',
		},
		{
			name: 'Chantal Wang',
			pronouns: 'she/her',
			prideflag: 'bi',
			url: 'https://lh5.googleusercontent.com/XKqQc7rSaAzjNzqNuIXo75ZzEGCC-IMQiyu2i7IC8IXc8Fgfqm24gs5QbwiNe5OPpuQ=w2400',
		},
		{
			name: 'Shawdi Sani',
			pronouns: 'she/her',
			url: 'https://lh4.googleusercontent.com/6wAbyt0O-sIAkbrQ6CvSWUa3YLEm0h8EZ8dSNc5DF3TkPFfMMrxK2SZgdtYLPGLFn1s=w2400',
		},
		{
			name: 'Tara Char',
			url: 'https://lh3.googleusercontent.com/cUH6paGvVDH-bWNAsB8YJd2ZTD_rDGjc9VxYoA99Gl9bobnJsjdpYogRYkpZn4JvZps=w2400',
			pronouns: 'she/her',
			prideflag: 'bi',
		},
		{
			name: 'Maya Balakrishnan',
			pronouns: 'she/her',
			prideflag: 'lesbian',
			url: 'https://lh6.googleusercontent.com/Y-L0wCJKdnKLB6TgnTiSBy_0toM_Yb-5KChhz6ivPWSoFym21aK4Rs3-t6D5Sr2xcVk=w2400',
		},
		{
			name: 'Shivani Hukkeri',
			pronouns: 'she/her',
			url: 'https://lh6.googleusercontent.com/Am12aRIvHI079uFmeUeKwr1TNV914ZJNlQ7Coy8SD_4sp91W03bAJcewQVADxexbZEg=w2400',
		},
		{
			name: 'Julie Cover',
			url: 'https://lh6.googleusercontent.com/f146PH-Zmdw4P7plmkLeXzAOrVbJo8D7aincLE9OdPRKwb6reFMcN9PmoA0ckC-qmUw=w2400',
			pronouns: 'she/her',
			prideflag: 'trans',
		},
		{
			name: 'Alicia Yu',
			pronouns: 'she/her',
			prideflag: 'lesbian',
			url: 'https://lh6.googleusercontent.com/wEFI65DFkMtBaJnO0Y7CY4P5ke1QgLnF2V10rE6tWUYfHL8jhTX6ov3_38FgNatxr8o=w2400',
		},
		{
			name: 'Katie Kubiato',
			url: 'https://lh3.googleusercontent.com/7e4IF-FuOEN8b_Sh1ilBdwJNENpWut4cuEbVaV2zbkXHSgTTMZs0kAxA4l5knAU4ca8=w2400',
			pronouns: 'she/her',
			prideflag: 'rainbow',
		},
		{
			name: 'Samika Karthik',
			pronouns: 'she/her',
			url: 'https://lh6.googleusercontent.com/nl0j70ZNK98Hn11k_DITJWf3TweLvp-DxuRuxZnIslfANoC-0SJhbRJeXB0_QsLfzpU=w2400',
		},
		{
			name: 'Tiff Peverilla',
			url: 'https://lh3.googleusercontent.com/ltUn0lmxt-ngvtC4RO6Tv1UfJPpuToYVMsvp5OelKDSdgWAgmssesM3YK9Dei_JozVw=w2400',
			pronouns: 'she/they',
			prideflag: 'lesbian',
		},
		{
			name: 'Amanda Wang',
			pronouns: 'she/her',
			prideflag: 'bi',
			url: 'https://lh5.googleusercontent.com/ZLQxTK8APmS-3Y0qxdzruOsUX_TwHPuRkVDf37JrHgjSWPgvs8kfyFf8oeTXlyUYryQ=w2400',
		},
	];

	let rotate_normal = true;

	function rotate() {
		rotate_normal = !rotate_normal;
		return rotate_normal;
	}
</script>

<Content wide={true}>
	<h2 class="relative">
		who we are
		<div class="absolute -right-20 -bottom-3 -rotate-12 md:hidden"><p>tap me!</p></div>
	</h2>
	<div class="grid-container px-10 w-full">
		{#each peopleData as datum}
			<Person {datum} />
		{/each}
	</div>
</Content>

<style>
	.grid-container {
		/**
   * User input values.
   */
		--grid-layout-gap: 1.25rem;
		--grid-column-count: 5;
		--grid-item--min-width: 100px;

		/**
   * Calculated values.
   */
		--gap-count: calc(var(--grid-column-count) - 1);
		--total-gap-width: calc(var(--gap-count) * var(--grid-layout-gap));
		--grid-item--max-width: calc((100% - var(--total-gap-width)) / var(--grid-column-count));

		display: grid;
		grid-template-columns: repeat(
			auto-fill,
			minmax(max(var(--grid-item--min-width), var(--grid-item--max-width)), 1fr)
		);
		grid-gap: var(--grid-layout-gap);
	}
</style>
