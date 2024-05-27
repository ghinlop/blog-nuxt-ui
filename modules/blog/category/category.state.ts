import type { CategoryBlogModel } from "./category.model";
import { TOAST } from "~/utils/toast";

export const useCategoryState = () => {
    const categories = ref<CategoryBlogModel[]>([]);
    const config = useRuntimeConfig().public;

    async function GetCategory() {
        const { data, error } = await useLazyFetch<{
            data: CategoryBlogModel[];
        }>("articles/posts/categories", {
            baseURL: config.apiUrl,
        });

        if (error.value) {
            return TOAST.error(error.value?.message);
        }
        if (!data.value) {
            categories.value = [];
            return;
        }

        categories.value = data.value.data!.map(_map);

        function _map(v: CategoryBlogModel) {
            let model: CategoryBlogModel = {
                slug: v["slug"],
                id: v["id"] || 0,
                name: v["name"],
                description: v["description"],
                image: v["image"],
                active: false,
                url: "",
                color: v["color"] || "",
            };

            return model;
        }
    }

    return {
        categories,
        GetCategory,
    };
};
