<script lang="ts" setup>
import { useCategoryState } from "~/modules/blog/category/category.state";
import type { BlogPostModel } from "~/modules/blog/post/post";
import { useBlogState } from "~/modules/blog/post/post.state";
const { categoryActive, GetCategory, findCategoryBySlug } = useCategoryState();
const { posts, GetBlogList } = useBlogState();

const route = useRoute();
const config = useRuntimeConfig().public;
const router = useRouter();

const { error, status, data, execute } = await useFetch<App.Response<BlogPostModel>>(
    "articles/posts/" + route.params.detail,
    { baseURL: config.apiUrl }
);
if (status.value === "idle") await execute();
if (error.value) {
    TOAST.error(error.value.message);
}
if (!data.value) router.back();

await GetCategory();
await findCategoryBySlug();

posts.per_page = 3;
await GetBlogList();

useSeoMeta({
    title: data.value?.data?.post_title,
});
</script>

<template>
    <div class="flex flex-col">
        <h2 class="text-2xl">{{ data!.data!.post_title }}</h2>
        <div class="flex gap-3 mt-6 mb-4">
            <div class="block">
                <img
                    src="https://ui-avatars.com/api/?name=Ghin+Lop&size=128"
                    alt="Ghin Lop"
                    class="size-10 rounded-full overflow-hidden inline-block"
                />
            </div>
            <div class="flex flex-col">
                <span class="uppercase font-normal text-zinc-500 text-[10px]"
                    >write by</span
                >
                <strong class="text-sm">Ghin Lop</strong>
            </div>
        </div>
        <UDivider />
        <div class="block mt-11 mb-14">
            <img
                src="https://picsum.photos/1440/300"
                alt=""
                class="w-full h-[300px] object-cover"
            />
        </div>

        <div class="flex">
            <div class="xl:w-3/4 lg:w-2/3 md:w-3/4 w-full">
                <div class="block" v-html="data!.data!.post_content"></div>
            </div>
            <div class="w-[2px] bg-zinc-200 lg:mx-8 md:mx-6 md:block hidden"></div>
            <div class="flex-grow md:block hidden">
                <div class="flex flex-col gap-8">
                    <h2 class="font-bold text-2xl">Top Articles</h2>
                    <ul class="grid grid-cols-1 gap-8">
                        <li v-for="i in posts.data">
                            <BlogCard
                                :category-slug="categoryActive.slug"
                                :blog="i"
                            ></BlogCard>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
