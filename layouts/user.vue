<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules";
import "swiper/css";
</script>

<template>
    <div class="min-h-dvh flex">
        <div class="lg:w-[calc(100%/7*4)] w-full lg:px-10 px-6 flex flex-col">
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
        <div class="w-[calc(100%/7*3)] lg:block hidden bg-blog-primary relative">
            <img
                src="/user_pattern.png"
                class="w-6/7 absolute bottom-0 left-0 z-10"
                alt=""
            />

            <div class="flex pl-14 pr-7 items-center h-full relative z-10">
                <!-- <ClientOnly>
                    <Swiper :slidesPerView="1" :spaceBetween="30" :modules="[Pagination]" :pagination="{}">
                        <SwiperSlide v-for="i in 10">Slider {{ i }}</SwiperSlide>
                    </Swiper>
                </ClientOnly> -->
            </div>
        </div>
    </div>
</template>
