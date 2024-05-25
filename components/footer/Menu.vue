<script lang="ts" setup>
import { MENU } from "~/modules/menu/menu.store";
</script>

<template>
    <div>
        <ul class="footer-menu">
            <li v-for="{ label, name } in MENU.FOOTER">
                <NuxtLink tag="a" :to="{ name }" active-class="active">{{
                    label
                }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.footer-menu {
    @apply flex flex-col;
    @apply gap-7;
    @apply font-medium;

    @screen lg {
        @apply gap-14;
        @apply flex-row;
    }
    @screen xl {
        @apply gap-16;
    }

    a {
        @apply text-zinc-400;
        @apply transition-colors duration-300;
        @apply text-sm;
        &:hover {
            @apply text-blog-primary;
        }

        @screen lg {
            @apply text-xs;
        }

        @screen xl {
            @apply text-lg;
        }
    }
}
</style>
