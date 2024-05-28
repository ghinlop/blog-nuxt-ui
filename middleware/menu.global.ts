import { useMenuStore } from "~/modules/menu/menu.store";
import { MenuAction } from "~/modules/menu/menu.type";

export default defineNuxtRouteMiddleware((to, from) => {
    const menuStore = useMenuStore();
    if (menuStore.active === MenuAction.open) menuStore.close();
});
