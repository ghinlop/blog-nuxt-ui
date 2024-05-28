<script lang="ts" setup>
import { MENU } from "~/modules/menu/menu.store";
</script>

<template>
    <div class="flex flex-col">
        <ul>
            <li v-for="{ label, name } in MENU.HEADER">
                <NuxtLink tag="a" :to="{ name }" active-class="active">{{
                    label
                }}</NuxtLink>
            </li>
        </ul>
        <div class="grid grid-cols-2 gap-2 font-bold px-4">
            <UButton :to="{ name: 'signIn' }" variant="ghost" block size="xl">
                Login
            </UButton>
            <UButton :to="{ name: 'signUp' }" block size="xl"> Sign Up </UButton>
        </div>
    </div>
</template>
<style scoped lang="scss">
ul {
    @apply flex flex-col font-medium;
    @apply divide-y divide-blog-liner/20;
    a {
        @apply p-3;
        @apply block relative;
        @apply transition-all duration-200 ease-linear;
        &:hover:not(.active) {
            @apply text-blog-primary;
        }
        &:focus {
            @apply text-blog-primary;
            @apply scale-95;
        }
        &.active {
            @apply text-blog-primary;
            @apply animate-gelatine;
        }
    }
}
</style>
