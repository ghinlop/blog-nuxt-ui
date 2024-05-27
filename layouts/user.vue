<script lang="ts" setup>
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
const sliderShow = ref();
const activeIndex = ref<number>(0);
</script>

<template>
    <div class="h-dvh flex overflow-hidden select-none">
        <div
            class="lg:w-[calc(100%/7*4)] w-full lg:px-10 px-6 flex flex-col h-full overflow-y-auto xl:pb-8 lg:pb-5 pb-8"
        >
            <div class="flex flex-col flex-grow justify-center">
                <div class="xl:pb-8 lg:py-5 py-8">
                    <div class="inline-block">
                        <NuxtLink to="/" tag="a">
                            <img src="/logo.png" alt="" />
                        </NuxtLink>
                    </div>
                </div>
                <main class="flex-grow flex items-center justify-center">
                    <div class="lg:w-1/2 md:w-2/3 sm:w-3/5">
                        <slot />
                    </div>
                </main>
            </div>
            <div class="flex justify-between text-[#718096]">
                <ULink>Privacy Policy</ULink>
                <span>Copyright 2022</span>
            </div>
        </div>
        <div class="w-[calc(100%/7*3)] lg:block hidden bg-[#845dea] relative">
            <img
                src="/user_pattern.png"
                class="w-6/7 absolute bottom-0 left-0 z-10"
                alt=""
            />

            <div
                class="flex flex-col justify-center px-14 items-center h-full relative z-10"
            >
                <Swiper
                    :slidesPerView="1"
                    :spaceBetween="30"
                    :autoplay="{
                        delay: 2000,
                        disableOnInteraction: false,
                    }"
                    :modules="[Autoplay]"
                    :loop="true"
                    @swiper="(swiper) => (sliderShow = swiper)"
                    @slideChange="(v) => (activeIndex = v.realIndex)"
                    class="w-full"
                >
                    <SwiperSlide v-for="i in 10">
                        <div class="flex flex-col items-center gap-6 text-center">
                            <img
                                src="/undraw_enter_uhqk.svg"
                                class="max-w-[300px]"
                                alt=""
                            />
                            <h3 class="text-white text-2xl font-bold">
                                Find Foods With Love
                            </h3>
                            <p class="text-white">
                                Eatly Is The Food Delivery Dashboard And Having More Than
                                2K+ Dishes Including Asian, Chinese, Italians And Many
                                More. Our Dashboard Helps You To Manage Orders And Money.
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>
                <div class="inline-grid grid-flow-col gap-2 mx-auto mt-6">
                    <div
                        class="min-w-2 min-h-2 rounded-full transition-all duration-300 cursor-pointer"
                        :class="{
                            'min-w-2 bg-white/50': activeIndex !== i - 1,
                            'min-w-8 bg-white': activeIndex === i - 1,
                        }"
                        v-for="i in 10"
                        @click="() => sliderShow?.slideTo(i - 1)"
                    ></div>
                </div>
            </div>
        </div>
    </div>
</template>
