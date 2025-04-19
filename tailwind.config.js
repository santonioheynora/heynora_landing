/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        soundbar1: {
          '0%, 100%': { height: '40%' },
          '50%': { height: '70%' },
        },
        soundbar2: {
          '0%, 100%': { height: '60%' },
          '50%': { height: '30%' },
        },
        soundbar3: {
          '0%, 100%': { height: '80%' },
          '50%': { height: '50%' },
        },
        soundbar4: {
          '0%, 100%': { height: '50%' },
          '50%': { height: '90%' },
        },
        soundbar5: {
          '0%, 100%': { height: '70%' },
          '50%': { height: '40%' },
        },
      },
      animation: {
        blink: 'blink 1s ease-in-out infinite',
        soundbar1: 'soundbar1 1.2s ease-in-out infinite',
        soundbar2: 'soundbar2 0.9s ease-in-out infinite',
        soundbar3: 'soundbar3 1.5s ease-in-out infinite',
        soundbar4: 'soundbar4 0.8s ease-in-out infinite',
        soundbar5: 'soundbar5 1.1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
