module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: 'media',
	theme: {
		extend: {},
		screens: {
			'custom-sm': '280px',
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
			'custom-md': '1000px', // for example, defining a custom small breakpoint
			// 'custom-md': '900px', // for example, defining a custom medium breakpoint
		},
	},
	plugins: [require('@tailwindcss/typography'), require('daisyui')],
	daisyui: {
		styled: true,
		// TODO: Theme needs works
		themes: [
			{
				solana: {
					/* your theme name */
					fontFamily: {
						display: ['PT Mono, monospace'],
						body: ['Inter, sans-serif'],
					},
					primary: '#f8ca00' /* Primary color */,
					'primary-focus': '#9945FF' /* Primary color - focused */,
					'primary-content':
						'#000000' /* Foreground content color to use on primary color */,

					secondary: '#f6d860' /* Secondary color */,
					'secondary-focus': '#f3cc30' /* Secondary color - focused */,
					'secondary-content':
						'#ffffff' /* Foreground content color to use on secondary color */,

					accent: '#33a382' /* Accent color */,
					'accent-focus': '#2aa79b' /* Accent color - focused */,
					'accent-content':
						'#ffffff' /* Foreground content color to use on accent color */,

					neutral: '#2b2b2b' /* Neutral color */,
					'neutral-focus': '#2a2e37' /* Neutral color - focused */,
					'neutral-content':
						'#ffffff' /* Foreground content color to use on neutral color */,

					'base-100':
						'#121212' /* Base color of page, used for blank backgrounds */,
					'base-200': '#35363a' /* Base color, a little darker */,
					'base-300': '#222222' /* Base color, even more darker */,
					'base-content':
						'#f9fafb' /* Foreground content color to use on base color */,

					info: '#2094f3' /* Info */,
					success: '#009485' /* Success */,
					warning: '#ff9900' /* Warning */,
					error: '#ff5724' /* Error */,
				},
			},
			// backup themes:
			// 'dark',
			// 'synthwave'
		],
		base: true,
		utils: true,
		logs: true,
		rtl: false,
	},
};
