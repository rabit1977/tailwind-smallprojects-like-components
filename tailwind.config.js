/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    keyframes: {
      loader: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      },
    },
    animation: {
      loader: 'loader 1s linear infinite',
    },
    boxShadow: {
      '3xl':
        '-5px -5px -5px rgba(255, 255, 255, 0.1), 10px 10px 10px rgba(0, 0, 0, 0.4)',
    },
    inset: {
      '3xl':
        '-5px -5px -5px rgba(255, 255, 255, 0.1), 10px 10px 10px rgba(0, 0, 0, 0.4)',
    },
  },
  plugins: [],
};
