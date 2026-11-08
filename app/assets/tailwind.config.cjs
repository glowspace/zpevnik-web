/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

const variations = [
  {
    key: 'zps',
    // https://davidpiesse.github.io/tailwind-md-colours/
    primary: {
      DEFAULT: '#388e3c',
      50: '#e8f5e9',
      100: '#c8e6c9',
      150: '#c8e6c9',
      200: '#a5d6a7',
      300: '#81c784',
      400: '#66bb6a',
      500: '#4caf50',
      600: '#43a047',
      700: '#388e3c',
      800: '#2e7d32',
      900: '#1b5e20',
    },
    surface: {
      50: '#F8FCF8',
      100: '#F4FAF5',
      200: '#EAF5EA',
      300: '#DFF1E0',
      400: '#D1EAD2',
      500: '#C8E6C9',
    }
  },
  {
    key: 'ez',
    primary: {
      DEFAULT: '#006EB7',
      50: '#EAF7FF',
      100: '#D6EEFF',
      150: '#C2E6FF',
      200: '#ADDEFF',
      300: '#84CEFF',
      400: '#5BBEFF',
      500: '#32ADFF',
      600: '#0A9DFF',
      700: '#0087E0',
      800: '#006EB7',
      900: '#004C7F',
      950: '#003B63'
    },
    surface: {
      50: '#F8FCFF',
      100: '#F1F9FF',
      200: '#EBF7FF',
      300: '#E4F4FF',
      400: '#DDF1FF',
      500: '#D6EEFF',
    },
  },
  {
    key: 'ek',
    primary: {
      DEFAULT: '#ce4536',
      50: '#fdf4f3',
      100: '#fce6e4',
      150: '#fce6e4', // 100
      200: '#fad2ce',
      300: '#f5b3ac',
      400: '#ed877c',
      500: '#e16052',
      600: '#ce4536',
      700: '#ad3528',
      800: '#8f2f25',
      900: '#772d25',
      950: '#40140f',
    },
    surface: {
      50: '#FEFBF9',
      100: '#FEF7F3',
      200: '#FDF3ED',
      300: '#FCEFE6',
      400: '#FCEBE0',
      500: '#FBE7DA',
    }
  }
]

const variationKey = process.env.VARIATION || 'ez'
const variation = variations.find((v) => v.key == variationKey) || variations[0]

// note: if you change these values, you may need to restart the `yarn dev` nuxt server
module.exports = {
  darkMode: 'selector',
  theme: {
    colors: {
      inherit: 'inherit',
      current: 'currentColor',
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      blue: '#006EB7',
      green: '#44B436',
      greendark: '#318127',
      yellow: '#faa61b',
      primary: variation.primary,
      red: '#B3261E',
      gray: {
        DEFAULT: '#777777',
        10: '#FCFCFC',
        50: '#F2F2F2',
        100: '#E4E4E4',
        200: '#C7C7C7',
        300: '#ACACAC',
        400: '#929292',
        500: '#777777',
        600: '#5F5F5F',
        700: '#474747',
        800: '#313131',
        900: '#1C1C1C',
      },
      surface: variation.surface,
      surfacedark: {
        50: '#1c1b1f',
        100: '#26242a',
        200: '#2a2830',
        300: '#302d37',
        400: '#332f3a',
        500: '#36323e',
      }
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    extend: {
      screens: {
        print: { raw: 'print' },
        screen: { raw: 'screen' },
      },
    },
  },
  plugins: [
    // https://tailwindcss.com/docs/functions-and-directives#using-apply-with-per-component-css
    // https://tailwindcss.com/docs/plugins
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.font-custom-light': {
          fontWeight: 300
        },
        '.font-custom-medium': {
          fontWeight: 600
        },
        '.font-custom-bold': {
          fontWeight: 700
        },
      })
    })
  ],
}
