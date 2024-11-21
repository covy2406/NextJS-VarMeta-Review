import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				'bg-color': 'rgb(206 195 243)',
				'primary-color': '#7c4fe0',
				// 'bg-overlay': 'linear-gradient(-47deg, #7c4fe0 0%, #4528DC 100%)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'banner-image': 'url(https://theme-land.com/sapp/demo/assets/img/content/welcome-bg-3.jpg)',
				'bg-overlay': 'linear-gradient(-47deg, #7c4fe0 0%, #4528DC 100%)',
				'combined-banner': 'linear-gradient(-47deg, #7c4fe0 0%, #4528DC 100%), url(https://theme-land.com/sapp/demo/assets/img/content/welcome-bg-3.jpg)',
			},
			backgroundColor: {
				'bg-header': 'rgba(255, 255, 255, 0.69)',
			},
			keyframes: {
				animateBounce: {
					'0%': { top: '0' },
					'50%': { top: '25px' },
					'100%': { top: '0' },
				},
				fadeInDownHeader: {
					'0%': {
						'opacity': '0',
						'transform': 'translate3d(0, -100%, 0)'
					},
					'100%': {
						'opacity': '1',
						'transform': 'translateZ(0)'
					}
				}
			},
			animation: {
				bounce: 'animateBounce 3s infinite',
				'animate-header': '500ms ease-in-out 0s normal none 1 running fadeInDownHeader',
			},
			after: {
				'position': 'absolute',
				'content': '" "',
				'height': '100%',
				'width': '100%',
				'top': '0',
				'left': '0',
				'opacity': ' 0.94',
				'z-index': '-1',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"), 
		function (utilities: { addUtilities: (utilities: Record<string, any>) => void }) {
		const { addUtilities } = utilities;
		addUtilities({
			'.has-overlay::after': {
				position: 'absolute',
				content: '""',
				height: '100%',
				width: '100%',
				top: '0',
				left: '0',
				opacity: '0.94',
				zIndex: '-1',
			},
		});
	},],
} satisfies Config;
