/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#FF8D41',
        'brand-cream': '#FFF9F5',
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
