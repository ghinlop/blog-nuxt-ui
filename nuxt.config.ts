// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: process.env.NODE_ENV !== "production" },
    app: {
        head: {
            title: "Eatly",
            link: [
                {
                    rel: "icon",
                    type: "image/png",
                    href: "/logo.png",
                },
            ],
        },
        pageTransition: {
            name: "page",
            mode: "out-in", // default
        },
    },
    css: ["swiper/css"],
    modules: [
        "@nuxtjs/google-fonts",
        "@pinia/nuxt",
        "@nuxt/image",
        "nuxt-icon",
        "@nuxt/ui",
        // "nuxt-swiper",
    ],
    ui: {
        safelistColors: ["gray", "zinc"],
    },
    tailwindcss: {
        viewer: false,
        configPath: "~/tailwind.config.ts",
    },
    googleFonts: {
        families: {
            Poppins: [400, 500, 600, 800],
            Inter: [400, 500, 600],
        },
    },
    router: {
        options: {
            scrollBehaviorType: "smooth",
        },
    },
    runtimeConfig: {
        apiUrl: undefined,
        public: {
            apiUrl: undefined,
            dev: process.env.NODE_ENV !== "production" || true,
            web: false,
            expired: false,
        },
    },
});
