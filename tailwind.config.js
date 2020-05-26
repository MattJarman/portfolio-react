module.exports = {
  purge: [],
  theme: {
    extend: {
      colors: {
        'paradise-pink': {
          '100': '#FDBED7',
          '500': '#ED4D6E',
          '600': '#BB364D',
        },
        'cultured-gray': '#F7F7F7',
        linkedin: '#2867B2',
        github: '#181A1B',
        javascript: '#F7DF1E',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
    minHeight: {
      '2': '0.5rem',
      '4': '1rem',
      '6': '1.5rem',
      '8': '2rem',
      '16': '4rem',
      '32': '8rem',
      '64': '16rem',
    },
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [require('tailwind-percentage-heights-plugin')()],
};
