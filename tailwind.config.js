import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'Figtree',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        mono: ['SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'monospace'],
        serif: ['Georgia', 'Times New Roman', 'serif'],
      },
      colors: {
        primary: {
          50: '#e8f5e9', // Tanza green — agriculture & nature
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#2e7d32', // primary green
          600: '#1b5e20',
          700: '#145214',
          800: '#0d3b0d',
          900: '#062006',
        },
        secondary: {
          50: '#fffde7', // Tanza gold — heritage & prosperity
          100: '#fff9c4',
          200: '#fff59d',
          300: '#fff176',
          400: '#ffee58',
          500: '#f9a825', // secondary gold/amber
          600: '#f57f17',
          700: '#e65100',
          800: '#bf360c',
          900: '#7f1d00',
        },
        accent: {
          50: '#fef9e7',
          100: '#fdf3ce',
          200: '#fbe79d',
          300: '#f9db6c',
          400: '#f7cf3b',
          500: '#f5c30a', // accent yellow/gold
          600: '#c49c08',
          700: '#937506',
          800: '#624e04',
          900: '#312702',
        },
        success: {
          50: '#e6f7ef',
          100: '#ccefdf',
          200: '#99dfbf',
          300: '#66cf9f',
          400: '#33bf7f',
          500: '#00af5f',
          600: '#008c4c',
          700: '#006939',
          800: '#004626',
          900: '#002313',
        },
        warning: {
          50: '#fff8e6',
          100: '#fff1cc',
          200: '#ffe399',
          300: '#ffd566',
          400: '#ffc733',
          500: '#ffb900',
          600: '#cc9400',
          700: '#996f00',
          800: '#664a00',
          900: '#332500',
        },
        error: {
          50: '#fceaea',
          100: '#f9d5d5',
          200: '#f3abab',
          300: '#ed8282',
          400: '#e75858',
          500: '#e12e2e',
          600: '#b42525',
          700: '#871c1c',
          800: '#5a1212',
          900: '#2d0909',
        },
        gray: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#adb5bd',
          600: '#868e96',
          700: '#495057',
          800: '#343a40',
          900: '#212529',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        slideIn: {
          '0%': {
            transform: 'translateY(10px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [typography],
};
