/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        gray: colors.neutral
      },
      fontFamily: {
        sans: ['InterVariable', 'Inter', ...defaultTheme.fontFamily.sans]
      }
      // aspectRatio: {
      //   "4/3": "4 / 3",
      //   "3/2": "3 / 2",
      //   "2/3": "2 / 3",
      //   "9/16": "9 / 16",
      // },
    }
  },
  plugins: [
    // require("@tailwindcss/line-clamp"),
    require('@tailwindcss/typography')
  ]
};
