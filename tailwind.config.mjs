/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				blue: {
					500: '#474ACF', // Slightly lighter for hover
					600: '#3639B5', // Your requested brand blue
				}
			},
		},
	},
	plugins: [],
};
