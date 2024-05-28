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
        card: {
            base: "flex flex-col",
            shadow: "shadow-2xl",
            divide: "divide-y-0",
            body: {
                base: "flex-grow",
                padding: "px-4 pb-5 pt-2",
            },
            header: {
                padding: "px-4 pt-5 pb-0",
            },
            footer: {
                padding: "px-4 pt-0 pb-5",
            },
        },
    },
});
