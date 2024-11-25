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
				// Min-width breakpoints
				'smn': '6.25rem',  // min-width: 100px
				'xs': '20rem',     // min-width: 320px
				'mn': '22.5rem',   // min-width: 360px
				'sm': '24rem',     // min-width: 384px
				'md': '28rem',     // min-width: 448px
				'smd': '30rem',    // min-width: 480px
				'lg': '32rem',     // min-width: 512px
				'xl': '36rem',     // min-width: 576px
				'2xl': '96rem',    // min-width: 1536px
				'3xl': '48rem',    // min-width: 768px
				'4xl': '56rem',    // min-width: 896px
				'5xl': '64rem',    // min-width: 1024px
				'6xl': '72rem',    // min-width: 1152px
				'7xl': '80rem',    // min-width: 1280px
				'sxl': '90rem',    // min-width: 1440px
			
				// Max-width breakpoints
				'max-smn': {'max': '6.24rem'},  // max-width: 99px
				'max-mn': {'max': '22.49rem'},  // max-width: 359px
				'max-xs': {'max': '19.99rem'},  // max-width: 319px
				'max-sm': {'max': '23.99rem'},  // max-width: 383px
				'max-md': {'max': '27.99rem'},  // max-width: 447px
				'max-smd': {'max': '29.99rem'}, // max-width: 479px
				'max-lg': {'max': '31.99rem'},  // max-width: 511px
				'max-xl': {'max': '35.99rem'},  // max-width: 575px
				'max-2xl': {'max': '95.99rem'}, // max-width: 1535px
				'max-3xl': {'max': '47.99rem'}, // max-width: 767px
				'max-4xl': {'max': '55.99rem'}, // max-width: 895px
				'max-5xl': {'max': '63.99rem'}, // max-width: 1023px
				'max-6xl': {'max': '71.99rem'}, // max-width: 1151px
				'max-7xl': {'max': '79.99rem'}, // max-width: 1279px
				'max-sxl': {'max': '89.99rem'}, // max-width: 1439px
			},
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
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
				'bg-phonecase': 'url(https://theme-land.com/sapp/demo/assets/img/content/mobile-slider.png)'
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
				}
			},
			animation: {
				bounce: 'animateBounce 3s infinite',
				'animate-header': '500ms ease-in-out 0s normal none 1 running fadeInDownHeader'
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
