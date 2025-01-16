/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  safelist: ['hover:bg-slate-200', 'hover:bg-slate-300', 'hover:bg-blue-200'],
  theme: {
    extend: {
      keyframes: {
        appear: {
          '0%': {
            opacity: 0,
            display: 'hidden',
          },
          '100%': {
            opacity: 1,
            display: 'block',
          },
        },
        dissappear: {
          '0%': {
            opacity: '1',
            display: 'block',
          },
          '100%': {
            opacity: '0',
            display: 'hidden',
          },
        },
      },
      animation: {
        appear: 'appear .3s ease-in-out forwards',
        dissappear: 'dissappear .3s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
