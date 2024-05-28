<script lang="ts" setup>
import type { BlogPostModel } from "~/modules/blog/post/post";

defineProps<{
    categorySlug: string;
    blog: BlogPostModel;
}>();
</script>

<template>
    <UCard :ui="{ base: 'min-h-full' }">
        <template #header>
            <NuxtLink
                tag="a"
                :to="{
                    name: 'blog-category-detail',
                    params: {
                        category: categorySlug,
                        detail: blog.slug,
                    },
                }"
            >
                <img
                    src="https://picsum.photos/seed/picsum/300/300"
                    alt=""
                    class="size-full object-cover rounded-xl"
                />
            </NuxtLink>
        </template>
        <NuxtLink
            tag="a"
            :to="{
                name: 'blog-category-detail',
                params: { category: categorySlug, detail: blog.slug },
            }"
        >
            <h3 class="font-bold line-clamp-2">
                {{ blog.post_title }}
            </h3>
        </NuxtLink>
        <template #footer>
            <div class="flex justify-between items-center">
                <div class="flex gap-3">
                    <div class="block">
                        <img
                            src="https://ui-avatars.com/api/?name=Ghin+Lop&size=128"
                            alt="Ghin Lop"
                            class="size-8 rounded-full overflow-hidden inline-block"
                        />
                    </div>
                    <div class="flex flex-col">
                        <span class="uppercase font-normal text-zinc-500 text-[8px]"
                            >write by</span
                        >
                        <strong class="text-xs">Ghin Lop</strong>
                    </div>
                </div>
                <span class="text-zinc-500 text-[10px] uppercase">{{
                    useDayjs().utc(blog.created_at).format("DD MMM, YYYY")
                }}</span>
            </div>
        </template>
    </UCard>
</template>

<style scoped></style>
