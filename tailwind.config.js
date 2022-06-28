/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.html"],
    theme: {
        screens: {
            lg: "1440px",
        },
        extend: {
            colors: {
                "strong-cyan": "hsl(171, 66%, 44%)",
                "light-blue": "hsl(233, 100%, 69%)",
                "dark-grayish-blue": "hsl(210, 10%, 33%)",
                "grayish-blue": "hsl(201, 11%, 66%)",
            },
            backgroundImage: {
                "hero-desktop": "url('../images/bg-header-desktop.png')",
                "hero-mobile": "url('../images/bg-header-mobile.png')",
            },
        },
        container: {
            center: true,
            padding: {
                DEFAULT: "2rem",
                lg: "10.3125rem",
            },
        },
    },
    plugins: [],
};
