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
      wiggle: {
      "0%, 100%": { width: '0' },
      "50%": { width: '100%' },
             },
    loop: {
      "0%": { width: '0' },
      "100%": { width: '100%' },
    },
    write: {
      "0%, 100%": { borderColor: 'transparent' },
      "50%": { borderColor: '#0070f3' },
    }         
           },
      animation: {
      wiggle: "wiggle 1s ease-in-out infinite",
      loop: "typing 5s steps(30, end)",
      write: "blink 1s step-end infinite"
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
