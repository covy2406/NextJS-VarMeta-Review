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
			container: {
				center: true,
			},
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
				'combined-banner': 'url(https://theme-land.com/sapp/demo/assets/img/content/welcome-bg-3.jpg), linear-gradient(-47deg, #7c4fe0 0%, #4528DC 100%)',
				'hover-btn': 'linear-gradient(135deg, #7c4fe0 10%, #4528DC)',
				'bg-phonecase': 'url(https://theme-land.com/sapp/demo/assets/img/content/mobile-slider.png)',
			},
			backgroundRepeat: {
				'bg-scroll': 'scroll',
				'bg-no-repeat': 'no-repeat',
				'bg-cover': 'cover',
				'bg-center': 'center',
			},
			backgroundColor: {
				'bg-header': 'rgba(255, 255, 255, 0.69)',
				'bg-workfaster': '#F6F9FE',
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
			transfrom: {
				'slide-transform': 'translate3d(-1205px, 0px, 0px)'
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
				content: '" "',
				height: '100%',
				width: '100%',
				top: '0',
				left: '0',
				opacity: '0.94',
				zIndex: '0',
				background: 'linear-gradient(-47deg, #7c4fe0 0%, #4528DC 100%)',

			},
			'.btn-right::after': {
				position: 'absolute',
				content: '" "',
				height: '100%',
				width: '100%',
				top: '0',
				left: '0',
				borderRadius: '100px',
				background: '#fff none repeat scroll 0 0',
				transition: 'all 0.3s ease 0s',
				zIndex: '-1',
			},
			'.arrow-right::after': {
				position: 'absolute',
				content: '"\\f054"',
				fontSize: '45px',
				fontWeight: '900',
				color: '#fff',
				top: '50%',
				right: '-1rem',
				transform: 'translateY(-50%)',
				transition: 'transform 0.3s',
			}
		});
	},],
} satisfies Config;
