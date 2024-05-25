import { MenuAction, type MenuType } from "./menu.type";

const HEADER: MenuType[] = [
    {
        label: "Menu",
        name: "menu",
    },
    {
        label: "Blog",
        name: "blog",
    },
    {
        label: "Pricing",
        name: "pricing",
    },
    {
        label: "Contact",
        name: "contact",
    },
];
const FOOTER: MenuType[] = [
    {
        label: "Blog",
        name: "blog",
    },
    {
        label: "Pricing",
        name: "pricing",
    },
    {
        label: "About",
        name: "about",
    },
    {
        label: "Contact",
        name: "contact",
    },
];

export const MENU = {
    HEADER,
    FOOTER,
};

export const useMenuStore = defineStore("menu_store", () => {
    const active = ref<MenuAction>(MenuAction.close);

    const open = () => (active.value = MenuAction.open);
    const close = () => (active.value = MenuAction.close);
    const toggle = () => (active.value === MenuAction.open ? close() : open());

    return {
        active,
        open,
        close,
        toggle,
    };
});
