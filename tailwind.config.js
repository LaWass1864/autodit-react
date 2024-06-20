// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'neon-blue': 'var(--neon-blue)',
        'rose-pink': 'var(--rose-pink)',
        'icterine': 'var(--icterine)',
        'screamin-green': 'var(--screamin-green)',
        'light-blue': 'var(--light-blue)',
        'custom-red': 'var(--custom-red)',
        'custom-blue': 'var(--custom-blue)',
      },
    },
  },
  plugins: [],
};
