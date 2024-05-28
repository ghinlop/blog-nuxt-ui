<script setup lang="ts">
import { useSettingState } from "./modules/settings/setting_state";
import { useSettingStore } from "./modules/settings/setting_store";
const config = useRuntimeConfig();

const { GetSettings } = useSettingState();
const settingStore = useSettingStore();
const setting = await GetSettings();
if (setting) settingStore.setting = setting;

useSeoMeta({
    titleTemplate: (title: string | undefined = undefined) => {
        return (title ? title + " | " : "") + "Hiệp Khách Giang Hồ";
    },
    description: () =>
        settingStore.setting ? settingStore.setting.site.description : "",
    googlebot: () => (!config.public.web ? "nosnippet" : "max-snippet"),
});
</script>

<template>
    <NuxtLayout>
        <NuxtLoadingIndicator color="#6C5FBC" />
        <NuxtPage />
        <UNotifications />
    </NuxtLayout>
</template>

<style>
.page-enter-active,
.page-leave-active {
    transition: all 0.1s;
}

.page-enter-from,
.page-leave-to {
    opacity: 0.1;
    filter: blur(0.2rem) grayscale(1);
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
</style>
