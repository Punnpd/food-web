const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-be-vietnam)', ...fontFamily.sans]
      },
      colors: {
        primary01: '#0E7EE4',
        primary02: '#065BA9',
        primary05: '#C0E8FF',
        primary04: '#8BC6FF',
        secondary01: '#14B8B4',
        black02: '#788796',
        black03: '#BDBEC8',
        white02: '#FDFDFD',
        white03: '#DBE4FF',
        dark01: '#212529',
        dark02: '#788796',
        dark03: '#BDBEC8',
        gray01: '#F4F7F9',
        gray02: '#F9F9F9',
        red01: '#FFEEEB',
        green01: '#B9C171',
        blue01: '#275C7A'
        // background: linear-gradient(77.25deg, #0E7EE4 9.22%, #14B8B4 32.92%);
      },
      dropShadow: {
        sidebar: '-5px 0px 20px rgba(120, 135, 150, 0.3)'
      },
      boxShadow: {
        tooltip: '4px 8px 20px rgba(112, 144, 176, 0.24)',
        'card': '1px 2px 10px rgba(169, 174, 177, 0.2)',
        'small-card': '1px 3px 15px rgba(196, 196, 196, 0.15)',
        'med-card': '1px 3px 15px rgba(189, 190, 200, 0.15)',
        table: '1.47651px 4.42953px 19.1946px rgba(196, 196, 196, 0.15)',
        glow: '0px 3px 20px rgba(254, 111, 154, 0.2)',
        top: '0px -4px 4px rgba(6, 91, 169, 0.05)'
      },
      fontSize: {
        'h1': ['28px', { lineHeight: '41px' }],
        'h2': ['22px', { lineHeight: '32px' }],
        'h3': ['20px', { lineHeight: '29px' }],
        'b1': ['17px', { lineHeight: '24.8px' }],
        'cap1': ['12px', { lineHeight: '18px', fontWeight: '600' }],
        'cap2': ['12px', { lineHeight: '18px', fontWeight: '400' }],
        'sub1': ['16px', { lineHeight: '23px', fontWeight: '700' }],
        'sub2': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'graph': ['10px', { lineHeight: '14.6px' }],
      },
    }
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'bg-gradient': (angle) => ({
            'background-image': `linear-gradient(${angle}, var(--tw-gradient-stops))`,
          }),
        },
        {
          // values from config and defaults you wish to use most
          values: Object.assign(
            theme('bgGradientDeg', {}), // name of config key. Must be unique
            {
              10: '10deg', // bg-gradient-10
              15: '15deg',
              20: '20deg',
              25: '25deg',
              30: '30deg',
              45: '45deg',
              60: '60deg',
              90: '90deg',
              120: '120deg',
              135: '135deg',
            }
          )
        }
      )
    })
  ]
}
