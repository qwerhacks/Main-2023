/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				bg: {
					DEFAULT: "#FFF9F5"
				},
				sky: {
					light: "#88AEDC",
					DEFAULT: "#4079BD"
				},
				lime: {
					DEFAULT: "#ACD7A2"
				},
				green: {
					DEFAULT: "#26AF79",
					light: "#72C6A4"
				},
				yellow: {
					DEFAULT: "#FCDF98"
				},
				sky: {
					DEFAULT: "#5AC7D8",
					light: "#8AD4E0"
				},
				coral: {
					DEFAULT: "#F15F72"
				},
				purple: {
					DEFAULT: "#6F1E5E",
					light: "#BF3D96"
				},
				teal: {
					DEFAULT: "#7DCBC8"
				},
				lavender: {
					DEFAULT: "#B682DA"
				},
				darkblue: {
					DEFAULT: '#200B3A'
				},
				button: {
					DEFAULT: "#FDDE97",
					active: "hsl(42,96%,70%)",
					border: "hsl(42,96%,65%)"
				}
			},
			fontFamily: {
				nighty: ["Nighty DEMO", "serif"],
				ranille: ["Ranille Normal", "serif"],
				nunito: ["Nunito", "sans"],
				reactor7: ["Reactor7", "mono"]
			},
		},
	},
	plugins: [],
}
