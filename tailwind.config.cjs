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
        },
    },
    plugins: [],
};
