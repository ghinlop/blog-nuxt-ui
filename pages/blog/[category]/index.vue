<script lang="ts" setup>
import { useCategoryState } from "~/modules/blog/category/category.state";
import { useBlogState } from "~/modules/blog/post/post.state";

const { categories, categoryId, categoryActive, GetCategory, findCategoryBySlug } =
    useCategoryState();
const { posts, GetBlogList } = useBlogState();

const tabMenu = computed(() => {
    return categories.value.map((v) => ({ label: v.name, id: v.id }));
});

async function load() {
    await GetCategory();
    await findCategoryBySlug();
    await GetBlogList();
}

onMounted(async () => await load());

useSeoMeta({
    title: "Blog",
});
</script>

<template>
    <div class="flex lg:flex-row flex-col gap-8">
        <div class="w-1/6 lg:block hidden">
            <ClientOnly>
                <UTabs
                    v-model="categoryActive.index"
                    orientation="vertical"
                    :items="tabMenu"
                    @change="(index: number) => categoryId = Number(categories[index].id)"
                ></UTabs>
            </ClientOnly>
        </div>
        <div class="lg:w-5/6 flex flex-col gap-8">
            <USelectMenu
                :options="tabMenu"
                v-model="categoryId"
                value-attribute="id"
                option-attribute="label"
                size="xl"
                class="md:hidden"
            ></USelectMenu>
            <ul
                class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8"
            >
                <li v-for="i in posts.data">
                    <BlogCard :category-slug="categoryActive.slug" :blog="i"></BlogCard>
                </li>
            </ul>
            <div class="block mt-8" v-if="posts.data.length && posts.per_page > 1">
                <UPagination
                    :max="posts.last_page"
                    :page-count="posts.per_page"
                    :total="posts.total"
                    v-model="posts.current_page"
                    class="justify-center"
                    size="xl"
                />
            </div>
        </div>
    </div>
</template>

<style scoped></style>
