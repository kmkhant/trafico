module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontFamily: {
      serif: 'DM Serif Display',
      body: 'Rubik',
    },
    extend: {
      colors: {
        body: '#FEF8F5',
        primary: '#402B2B',
        accent: '#EE4D47',
        tint: '#FDEDE8',
        darkblue: '#0F264C',
      },
      dropShadow: {
        primary: '0 20px 40px rgba(238, 77, 71, 0.1)',
        secondary: '0px 30px 40px rgba(244, 125, 103, 0.2)',
        tertiary: '0 20px 40px rgba(32, 56, 100, 0.3);',
      },
    },
  },
  plugins: [],
};