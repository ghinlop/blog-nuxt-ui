<script lang="ts" setup>
import { useCategoryState } from "~/modules/blog/category/category.state";

const { categories, GetCategory } = useCategoryState();
const tabItems = computed(() => {
    return categories.value.map((v) => ({ label: v.name }));
});

onMounted(async () => {
    await GetCategory();
});
</script>

<template>
    <div class="flex lg:flex-row flex-col">
        <div class="w-1/6 lg:block hidden">
            <UTabs orientation="vertical" :items="tabItems"></UTabs>
        </div>
        <div class="lg:w-5/6">
            <div
                class="grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5"
            >
                <UCard>
                    <template #header>
                        <img
                            src="https://picsum.photos/id/1/300/300"
                            alt=""
                            class="size-full object-cover rounded-xl"
                        />
                    </template>
                    <h3></h3>
                </UCard>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
