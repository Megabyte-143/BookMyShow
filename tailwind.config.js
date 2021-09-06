module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        navbar:
        {
          50: '#edf1fc',
          100: '#d3d4e1',
          200: '#2B3148',
          300: '#989bb2',
          400: '#7c7f9b',
          500: '#636582',
          600: '#4c4f66',
          700: '#363849',
          800: '#21222e',
          900: '#0a0a16',
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}
