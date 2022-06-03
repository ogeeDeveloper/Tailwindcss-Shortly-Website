module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      // Custom Colors
      cyan: 'hsl(180, 66%, 49%)',
      cyanLight: 'hsl(180, 66%, 69%)',
      darkViolet: 'hsl(257, 27%, 26%)',
      red: 'hsl(0, 87%, 67%)',
      grayishViolet: 'hsl(257, 7%, 63%)',
      veryDarkBlue: 'hsl(255, 11%, 22%)',
      veryDarkViolet: 'hsl(260, 8%, 14%)'
    },
    FontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    spacing: {
      // Extend the spacing from 97
      180: '32rem'
    }
  },
  plugins: [],
}
