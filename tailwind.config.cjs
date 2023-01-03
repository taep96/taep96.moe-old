/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                bg: "#fbf1c7",
                fg: "#3c3836",
                blue: "#458588",
                gray: "#928374",
            },
            fontFamily: {
                mono: ["JetBrains Mono", "monospace"],
            },
            animation: {
                cursor: "cursor .7s linear infinite alternate",
            },
            keyframes: {
                cursor: { "100%": { opacity: 0 } },
            },
        },
    },
    plugins: [],
};
