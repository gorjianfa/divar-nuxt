//* @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    '~/components/**/*.vue',
    '~/layouts/**/*.vue',
    '~/pages/**/*.vue',
    '~/plugins/**/*.js',
    '~/nuxt.config.js',
  ],
  prefix: 'tw-',
  theme: {
    screens: {
      xs: '360px',
      sm: '600px',
      tablet: '640px',
      md: '905px',
      laptop: '1024px',
      lg: '1240px',
      desktop: '1280px',
      xl: '1440px',
    },
    extend: {
      fontfamily: {
        sans: [
          'IRANSans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
    },
  },
  corePlugins: {
    container: false,
    preflight: false,
  },
  plugins: [
    plugin(function ({ addComponents, addVariant }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          margin: "0 16px",
          width: "inherit",

          "@screen sm": {
            maxWidth: "100%",
            margin: "0 32px",
            width: "inherit",
          },
          "@screen xl": {
            maxWidth: "1280px",
            margin: "0 auto",
            // padding: '0 32px',
            width: "100%",
          },
        },
      })
      addVariant('not-last', '&:not(:last-child)')
    }),
  ],
}
