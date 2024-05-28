import type { CategoryBlogModel } from "./category.model";
import { TOAST } from "~/utils/toast";

export const useCategoryState = () => {
    const router = useRouter();
    const route = useRoute();

    const categories = ref<CategoryBlogModel[]>([]);
    const categoryId = ref<number>(-1);
    const config = useRuntimeConfig().public;

    const categoryActive = computed(() => {
        let active = {
            id: -1,
            index: 0,
            slug: "tat-cat",
        };

        if (categoryId.value !== -1) {
            let index = categories.value.findIndex((v) => v.id === categoryId.value);
            if (index) {
                active.id = Number(categories.value[index].id);
                active.index = index;
                active.slug = categories.value[index].slug;
            }
        }
        return active;
    });
    watch(categoryActive, ({ index, slug }) => {
        navigateTo({ name: "blog-category", params: { category: slug } });
    });

    async function GetCategory() {
        const { data, error, status, execute } = await useFetch<{
            data: CategoryBlogModel[];
        }>("articles/posts/categories", {
            baseURL: config.apiUrl,
        });
        if (status.value === "idle") await execute();
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

        categories.value = [
            {
                slug: "tat-ca",
                id: -1,
                name: "Tất cả",
                description: undefined,
                image: undefined,
                active: false,
                url: "",
                color: "",
            },
            ...categories.value,
        ];
    }

    async function findCategoryBySlug() {
        if (categories.value.length) {
            const slug = route.params.category.toString();
            if (!slug)
                return await router.replace({
                    name: "blog-category",
                    params: { category: "tat-ca" },
                });
            if (slug !== "tat-ca") {
                if (categories.value.length) {
                    let find = categories.value.find((v) => v.slug === slug);
                    if (find) categoryId.value = Number(find.id);
                }
            }
        }
    }

    return {
        categories,
        categoryId,
        categoryActive,
        GetCategory,
        findCategoryBySlug,
    };
};
