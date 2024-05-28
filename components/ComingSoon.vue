<script lang="ts" setup></script>

<template>
    <UCard :ui="{ background: 'bg-blog-primary', body: { padding: 'sm:p-20' } }">
        <div class="flex lg:flex-row flex-col gap-8">
            <div
                class="flex-grow sm:text-6xl text-4xl text-white font-bold flex flex-col justify-center gap-5 text-center"
            >
                <p>This is cover for "coming soon"</p>
                <p>__(*<span class="font-normal">___</span>*)__</p>
                <p class="text-[8px] text-violet-200">
                    Unfortunately I did not complete the project due to personal reasons.
                </p>
            </div>
            <div class="min-w-[300px] max-w-full w-[300px]">
                <img src="/undraw_programming_re_kg9v.svg" alt="" />
            </div>
        </div>
    </UCard>
</template>

<style scoped></style>
