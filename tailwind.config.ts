/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.config.ts",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                blog: {
                    primary: "#6C5FBC",
                    secondary: "#EAEAEA",
                    liner: "#CBCBCB",
                },
            },
            container: {
                center: true,
                screens: {
                    default: "1440px",
                },
            },
            fontFamily: {
                san: [
                    "Poppins",
                    "ui-sans-serif",
                    "system-ui",
                    "sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                    "Noto Color Emoji",
                ],
                header: ["Inter", "sans-serif"],
            },
            keyframes: {
                gelatine: {
                    "from, to": { transform: "scale(1, 1)" },
                    "25%": { transform: "scale(0.9, 1.1)" },
                    "50%": { transform: "scale(1.1, 0.9)" },
                    "75%": { transform: "scale(0.95, 1.05)" },
                },
            },
            animation: {
                gelatine: "gelatine 0.5s",
            },
        },
    },
    plugins: [],
};
