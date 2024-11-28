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
    		screens: {
					// 'custom-range': {'min': '426px', 'max': '627px'},
    			smn: '6.25rem',
    			xs: '20rem',
    			mn: '22.5rem',
    			sm: '24rem',
    			md: '28rem',
    			smd: '30rem',
    			lg: '32rem',
    			xl: '44rem',
    			'3xl': '48rem',
    			'4xl': '56rem',
    			'5xl': '64rem',
    			'6xl': '72rem',
    			'7xl': '80rem',
    			sxl: '90rem',
    			'max-smn': {
    				max: '6.24rem'
    			},
    			'max-mn': {
    				max: '22.49rem'
    			},
    			'max-xs': {
    				max: '19.99rem'
    			},
    			'max-sm': {
    				max: '23.99rem'
    			},
    			'max-md': {
    				max: '27.99rem'
    			},
    			'max-smd': {
    				max: '29.99rem'
    			},
    			'max-lg': {
    				max: '31.99rem'
    			},
    			'max-xl': {
    				max: '35.99rem'
    			},
    			'max-2xl': {
    				max: '95.99rem'
    			},
    			'max-3xl': {
    				max: '47.99rem'
    			},
    			'max-4xl': {
    				max: '55.99rem'
    			},
    			'max-5xl': {
    				max: '63.99rem'
    			},
    			'max-6xl': {
    				max: '71.99rem'
    			},
    			'max-7xl': {
    				max: '79.99rem'
    			},
    			'max-sxl': {
    				max: '89.99rem'
    			}
    		},
    		container: {
    			center: true,
    			padding: {
    				DEFAULT: '1rem',
    				sm: '2rem',
    				lg: '4rem',
    				xl: '5rem',
    				'2xl': '6rem'
    			}
    		},
    		colors: {
					// 'p': '#f6f9fe',
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
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - .125rem)',
    			sm: 'calc(var(--radius) - .25rem)'
    		},
    		backgroundImage: {
    			'banner-image': 'url(https://theme-land.com/sapp/demo/assets/img/content/welcome-bg-3.jpg)',
    			'bg-overlay': 'linear-gradient(-47deg, #7c4fe0 0%, #4528DC 100%)',
    			'combined-banner': 'url(https://theme-land.com/sapp/demo/assets/img/content/welcome-bg-3.jpg), linear-gradient(-47deg, #7c4fe0 0%, #4528DC 100%)',
    			'hover-btn': 'linear-gradient(135deg, #7c4fe0 10%, #4528DC)',
    			'bg-phonecase': 'url(https://theme-land.com/sapp/demo/assets/img/content/mobile-slider.png)',
					'bg-subscribe': 'url(	https://theme-land.com/sapp/demo/assets/img/content/map.png)',
    		},
    		backgroundRepeat: {
    			'bg-scroll': 'scroll',
    			'bg-no-repeat': 'no-repeat',
    			'bg-cover': 'cover',
    			'bg-center': 'center'
    		},
    		backgroundColor: {
    			'bg-header': 'rgba(255, 255, 255, 0.69)',
    			'bg-workfaster': '#F6F9FE'
    		},
    		keyframes: {
    			animateBounce: {
    				'0%': {
    					top: '0'
    				},
    				'50%': {
    					top: '1.5625rem'
    				},
    				'100%': {
    					top: '0'
    				}
    			},
    			fadeInDownHeader: {
    				'0%': {
    					opacity: '0',
    					transform: 'translate3d(0, -100%, 0)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateZ(0)'
    				}
    			},
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			bounce: 'animateBounce 3s infinite',
    			'animate-header': '500ms ease-in-out 0s normal none 1 running fadeInDownHeader',
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		},
    		transfrom: {
    			'slide-transform': 'translate3d(-75.3125rem, 0rem, 0rem)'
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
					borderRadius: '6.25rem',
					background: '#fff none repeat scroll 0 0',
					transition: 'all 0.3s ease 0s',
					zIndex: '-1',
				},
				'.arrow-right::after': {
					position: 'absolute',
					content: '"\\f054"',
					fontSize: '2.8125rem',
					fontWeight: '900',
					color: '#fff',
					top: '50%',
					right: '-16px',
					transform: 'translateY(-50%)',
					transition: 'transform 0.3s',
				}
			});
		},],
} satisfies Config;
