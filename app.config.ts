export default defineAppConfig({
    ui: {
        primary: "violet",
        gray: "zinc",
        button: {
            base: "focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 focus:animate-gelatine",
            rounded: "lg:rounded-2xl rounded-xl",
            size: {
                "2xl": "text-base",
            },
            padding: {
                "2xl": "lg:px-6 lg:py-4 px-3 py-2",
            },
        },
        icons: {
            dynamic: true,
        },
        input: {
            placeholder: "placeholder-blog-primary font-meidum",
            rounded: "rounded-xl",
            padding: {
                xl: "px-6 py-4",
            },
            icon: { trailing: { pointer: "" } },
        },
    },
});
