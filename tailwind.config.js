/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", 
  theme: {
    colors: {
    transparent: 'transparent',
    current: 'currentColor',
    'white': '#ffffff',
    'purple': '#0070f3;',
    'midnight': '#121063',
    'metal': '#565584',
    'light': '#fbfcfe',
    'silver': '#282A35',
    'dark': '#191C26',
    'test': '#e2e8f0',
  },extend: {},
  screens: {
    '2xl': {'max': '1535px'},
    // => @media (max-width: 1535px) { ... }

    'xl': {'max': '1279px'},
    // => @media (max-width: 1279px) { ... }

    'lg': {'max': '1023px'},
    // => @media (max-width: 1023px) { ... }

    'md': {'max': '767px'},
    // => @media (max-width: 767px) { ... }

    'sm': {'max': '639px'},
    // => @media (max-width: 639px) { ... }
  }
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ]
}
