/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}",],
    theme: {
        extend: {},
        screens: {
            xs: '374px',
            sm: '600px',
            md: '960px',
            lg: '1280px',
            xl: '1440px'
        }
    },
    plugins: [],
}

