module.exports = {
	purge: [
		'./src/*.html',
	  ],
  theme: {
	fontFamily: {
      'display': ['Proxima Nova', 'proxima-nova', 'sans-serif'],
      'body': ['"Open Sans"', 'sans-serif'],
    },
    boxShadow: {
      default: '0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06)',
       md: ' 0 4px 6px -1px rgba(0, 0, 0, .1), 0 2px 4px -1px rgba(0, 0, 0, .06)',
      lg: ' 0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)',
      xl: ' 0 20px 25px -5px rgba(0, 0, 0, .1), 0 10px 10px -5px rgba(0, 0, 0, .04)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      outline: '0 0 0 3px rgba(96,171,210,0.5)',
      focus: '0 0 0 3px rgba(96,171,210,0.5)',
      'none': 'none',
    },
	screens: {
		'sm': '640px',
		// => @media (min-width: 640px) { ... }
  
		'md': '768px',
		// => @media (min-width: 768px) { ... }
  
		'lg': '1024px',
		// => @media (min-width: 1024px) { ... }
  
		'xl': '1280px',
		// => @media (min-width: 1280px) { ... }

		'xxl': '1536px',

		'xxxl': '1824px',
	  },
    extend: {
	    colors: {
					green: {
						'100': '#baedd2',
						'200': '#9fdcbc',
						'300': '#69c896',
						'400': '#2cb16b',
						'500': '#06a350',
						'600': '#058748',
						'700': '#045d3d',
						'800': '#0b4f34',
						'900': '#153d28'
					},
	        gray: {
	          '100': '#F6F6F6',
	          '200': '#EFEFEF',
	          '300': '#d0d0d0',
	          '400': '#b3b3b3',
	          '500': '#999999',
	          '600': '#808080',
	          '700': '#666666',
	          '800': '#4b4b4b',
	          '900': '#2D2D2D',
	        },
	        orange: {
	          '100': '#FFEADC',
	          '200': '#F7C5A4',
	          '300': '#F0A16D',
	          '400': '#E97D36',
	          '500': '#E05A00',
	          '600': '#C04B00',
	          '700': '#9F3E00',
	          '800': '#7D3100',
	          '900': '#5C2500',
	        },
	         blue: {
	          '100': '#bcdbfa',
	          '200': '#8bb5e0',
	          '300': '#5d92c7',
	          '400': '#3372b1',
	          '500': '#0d559c',
	          '600': '#0b4987',
	          '700': '#0a3f75',
	          '800': '#083460',
	          '900': '#06284a',
	        },
	        yellow: {
	          '100': '#FFF7E4',
	          '200': '#F9E7B9',
	          '300': '#F4D88F',
	          '400': '#EFC965',
	          '500': '#E9B949',
	          '600': '#CBA030',
	          '700': '#AC8724',
	          '800': '#8D6D18',
	          '900': '#6E5416',
	        },
	        red: {
	          '100': '#FEEFEF',
	          '200': '#EDBBB9',
	          '300': '#DD8885',
	          '400': '#CC5551',
	          '500': '#BA2525',
	          '600': '#A21A15',
	          '700': '#89120E',
	          '800': '#700A07',
	          '900': '#560404',
	        }
	      }
      }
  },
  variants: {},
  plugins: []
}
