<script lang="ts" setup></script>

<template>
    <div class="min-h-dvh flex">
        <div class="lg:w-3/5 w-full lg:px-10 px-6 flex flex-col">
            <div class="xl:py-8 lg:py-5 py-8">
                <div class="inline-block">
                    <NuxtLink to="/" tag="a">
                        <img src="/logo.png" alt="" />
                    </NuxtLink>
                </div>
            </div>
            <main class="flex-grow flex items-center justify-center">
                <div class="lg:w-1/2 md:w-2/3 w-full">
                    <slot />
                </div>
            </main>
        </div>
        <div class="w-2/5 lg:block hidden bg-blog-primary"></div>
    </div>
</template>
