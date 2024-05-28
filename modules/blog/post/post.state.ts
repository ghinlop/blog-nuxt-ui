import { useCategoryState } from "../category/category.state";
import type { BlogPostListModel, BlogPostModel } from "./post";

export const useBlogState = () => {
    const config = useRuntimeConfig().public;
    const { categoryId } = useCategoryState();
    const posts = reactive<BlogPostListModel>({
        data: [],
        last_page: 1,
        total: 1,
        current_page: 1,
        per_page: 4,
    });

    watch(() => posts.current_page, GetBlogList);

    async function GetBlogList() {
        let query: { [key: string]: any; category_id?: any } = {
            page: posts.current_page,
            limit: posts.per_page,
        };
        if (categoryId.value && categoryId.value !== -1) {
            query["category_id"] = categoryId.value;
        }

        const { status, data, error, execute } = await useFetch<
            App.Response<List.Pagination<BlogPostModel>>
        >("articles/posts", {
            baseURL: config.apiUrl,
            query,
        });

        if (status.value === "idle") await execute();
        if (error.value) {
            TOAST.error(error.value.message);
            posts.data = [];
            return;
        }

        if (data.value && data.value.data) {
            posts.current_page = data.value.data.current_page || 1;
            posts.per_page = Number(data.value.data.per_page) || 10;
            posts.last_page = data.value.data.last_page;
            posts.total = data.value.data.total;
            posts.data = data.value.data.data.map(_map);
        }

        function _map(v: BlogPostModel) {
            let model: BlogPostModel = {
                id: v["id"],
                post_content: v["post_content"],
                post_img: v["post_img"],
                post_categories: v["post_categories"] || [],
                post_title: v["post_title"],
                slug: v["slug"],
                created_at: v.created_at,
                updated_at: v.updated_at,
                url: { name: "tin-tuc-slug", params: { slug: v.slug } },
                description: v["description"] || "",
            };

            //  model.post_categories = FormatCategoriesPost(model);

            return model;
        }
    }

    return {
        posts,
        GetBlogList,
    };
};
