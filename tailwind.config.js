/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontSize: {
            sm: ".75rem",
            base: ".875rem",
            lg: "1rem",
            xl: "1.125rem",
            "2xl": "1.25rem",
            "3xl": "1.5rem",
            "4xl": "1.875rem",
            "5xl": "2.25rem",
            "6xl": "3rem",
            "7xl": "4rem",
        },
        extend: {
            colors: {
                darpa: "#d6d5d0",
            },
        },
    },
    plugins: [],
};
