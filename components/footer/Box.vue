<script lang="ts" setup></script>

<template>
    <footer class="bg-zinc-100">
        <div
            class="container xl:pt-24 xl:pb-20 lg:pt-16 lg:pb-14 pt-14 pb-9 xl:px-0 px-8"
        >
            <div
                class="flex lg:flex-nowrap flex-wrap justify-between items-center gap-y-14"
            >
                <Logo class="order-1" />
                <FooterMenu class="lg:w-auto w-full lg:order-1 order-2" />
                <FooterSocial class="lg:hidden block order-1" />
            </div>
            <UDivider class="xl:mt-5 xl:mb-14 lg:mt-6 lg:mb-10 mt-8 mb-6" />
            <div class="flex items-center lg:justify-between">
                <p class="text-sm text-center lg:w-auto w-full">
                    © 2023 EATLY All Rights Reserved.
                </p>
                <FooterSocial class="lg:block hidden" />
            </div>
        </div>
    </footer>
</template>

<style scoped></style>
