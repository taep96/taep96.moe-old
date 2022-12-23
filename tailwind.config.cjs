/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                bg: "#282828",
                fg: "#ebdbb2",
                accent: "#b8bb26",
            },
            fontFamily: {
                mono: ["JetBrains Mono", "monospace"],
            },
            animation: {
                cursor: "cursor 1.5s infinite",
            },
            keyframes: {
                cursor: {
                    "0%, 100%": { opacity: 0 },
                    "50%": { opacity: 1 },
                },
            },
        },
    },
    plugins: [],
};
