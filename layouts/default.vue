<script lang="ts" setup></script>

<template>
    <div class="flex flex-col min-h-dvh">
        <HeaderBox />
        <main class="flex-grow">
            <div class="container px-7">
                <slot />
            </div>
        </main>
        <FooterBox />

        <BottomSheet />
    </div>
</template>

<style scoped></style>
