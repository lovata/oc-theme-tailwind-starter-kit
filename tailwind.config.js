const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './layouts/**/*.htm',
    './pages/**/*.htm',
    './partials/**/*.htm',
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
};
