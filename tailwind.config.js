// tailwind.config.js
module.exports = {
    theme: {
      extend: {
        animation: {
          'marquee': 'marquee 5s linear infinite',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translate3d(0, var(--move-initial), 0)' },
            '100%': { transform: 'translate3d(0, var(--move-final), 0)' },
          },
        },
      },
    },
    variants: {
      extend: {
        animation: ['hover', 'group-hover'],
      },
    },
    plugins: [],
  };
  