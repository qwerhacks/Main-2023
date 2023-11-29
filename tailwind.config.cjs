/** @type {import('tailwindcss').Config}*/
const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors: {
        lavender: {
          DEFAULT: "#B682DA"
        },
        darkblue: {
          DEFAULT: '#200B3A'
        },
				indigo: {
					DEFAULT: "#3A0B75"
				},
      },

			fontFamily: {
				reactor7: ["Reactor7", "mono"],
				fredoka: ["FredokaOne", "sans"],
				jetbrains: ["JetBrainsMono", "mono"]
			},
    }
  },

  plugins: []
};

module.exports = config;