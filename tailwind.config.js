/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class", '[data-theme="dark"]'], // Enables dark mode via data-theme
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Make sure Tailwind scans your files
    theme: {
        extend: {},
    },
    plugins: [],
};
