/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
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
  },extend: {
    keyframes: {
      typing: {
        "0%,10%,100%": { width: '0%' },
        "50%,70%": { width: '100%' },
      },
      blink: {
      "0%,10%,100%": { width: '0',borderColor: 'transparent' },
      "50%,70%,90%": { width: '100%',borderColor: '#0070f3' },
    },      
           },
      animation: {
      loop: "typing 5s steps(30, end) infinite ,blink-blink .5s step-end infinite",
      animate: "typing 5s steps(30, end) infinite"
      },
  },
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
