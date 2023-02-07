const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                bg: "#202231",
                fg: "#DEE0EF",
                fennel: "#709BBD",
                mint: "#AAC9D4",
            },
            fontFamily: {
                mono: ["JetBrains Mono", "monospace", ...fontFamily.mono],
            },
            animation: {
                cursor: "cursor .8s ease-in-out infinite alternate",
            },
            keyframes: {
                cursor: { "100%": { opacity: 0 } },
            },
        },
    },
    plugins: [],
};
