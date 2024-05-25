<script lang="ts" setup>
import { MENU } from "~/modules/menu/menu.store";
import { useMenuStore } from "~/modules/menu/menu.store";
import { MenuAction } from "~/modules/menu/menu.type";
const store = useMenuStore();
</script>

<template>
    <header class="header">
        <div class="header-box">
            <nav class="header-nav">
                <!-- Logo -->
                <NuxtLink
                    to="/"
                    class="flex flex-nowrap items-center gap-3"
                    active-class="animate-gelatine"
                >
                    <img class="xl:size-10 lg:size-8 size-10" src="/logo.png" />
                    <h1 class="text-blog-primary text-xl font-bold">eatly</h1>
                </NuxtLink>

                <!-- Menu -->
                <div class="header-nav_menu">
                    <!-- Main Menu -->
                    <ul class="main-menu">
                        <li v-for="{ label, name } in MENU.HEADER">
                            <NuxtLink tag="a" :to="{ name }" active-class="active">{{
                                label
                            }}</NuxtLink>
                        </li>
                    </ul>

                    <!-- Sub-menu -->
                    <div class="grid grid-cols-2 gap-2 font-bold">
                        <UButton
                            :to="{ name: 'signIn' }"
                            variant="ghost"
                            block
                            size="2xl"
                        >
                            Login
                        </UButton>
                        <UButton :to="{ name: 'signUp' }" block size="2xl">
                            Sign Up
                        </UButton>
                    </div>
                </div>
                <UButton
                    :icon="store.active == MenuAction.open ? 'i-mdi:close' : 'i-mdi:menu'"
                    size="xl"
                    variant="link"
                    color="gray"
                    :ui="{ base: 'lg:hidden' }"
                    @click="store.toggle"
                />
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped src="~/assets/styles/header.scss"></style>
<style lang="scss" scoped src="~/assets/styles/menu.scss"></style>
