/** @type {import('tailwindcss').Config} */
export default {
  content: [
    ".index.html",
    ".src/**/*.{vue,js.ts,tsx,jsx}",
    "./node_modules/@tremor/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
