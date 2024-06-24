import tailwindForms from '@tailwindcss/forms';
import tailwindScrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  plugins: [tailwindForms(), tailwindScrollbar],
};
