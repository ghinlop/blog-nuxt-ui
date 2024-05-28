<script lang="ts" setup></script>

<template>
    <div class="flex flex-col min-h-dvh">
        <HeaderBox />
        <main class="flex-grow">
            <div class="container px-7 lg:pt-32 pb-28 md:pt-20 pt-16">
                <slot />
            </div>
        </main>
        <FooterBox />

        <BottomSheet />
    </div>
</template>

<style scoped></style>
