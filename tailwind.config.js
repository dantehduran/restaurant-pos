/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		`components/**/*.{vue,js}`,
		`layouts/**/*.vue`,
		`pages/**/*.vue`,
		`composables/**/*.{js,ts}`,
		`plugins/**/*.{js,ts}`,
		`App.{js,ts,vue}`,
		`app.{js,ts,vue}`,
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Barlow', 'sans-serif'],
			},
			colors: {
				primary: '#EB966A',
			},
			boxShadow: {
				primary: '0px 4px 24px -5px rgba(234,124,105,0.32)',
				'inverse-top': '4px 4px 0 #1f2937',
				'inverse-bottom': '4px -4px 0 #1f2937',
			},
		},
	},
	plugins: [],
};
