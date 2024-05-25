<script lang="ts" setup>
import { useMenuStore } from "~/modules/menu/menu.store";
import { MenuAction } from "~/modules/menu/menu.type";

const menu = useMenuStore();
const bottomSheet = ref<HTMLDivElement>();
const clientHeight = computed(() => {
    if (!bottomSheet.value || !bottomSheet.value.children.length) return "0px";
    return bottomSheet.value.children[0].clientHeight + "px";
});
</script>

<template>
    <div class="relative z-40">
        <div
            class="bottomOverlay"
            v-show="menu.active === MenuAction.open"
            @click="menu.close"
        ></div>
        <Transition>
            <div
                class="bottomSheet"
                ref="bottomSheet"
                v-show="menu.active === MenuAction.open"
            >
                <BottomSheetMenu class="flex-col !gap-0" />
            </div>
        </Transition>
    </div>
</template>

<style scoped lang="scss">
.bottomOverlay {
    @apply bg-blog-primary/10;
    @apply fixed top-0 left-0;
    @apply w-full h-full;
    @apply z-40;
}
.bottomSheet {
    @apply py-3;
    @apply z-40 w-full max-w-[400px] left-1/2 -translate-x-1/2;
    @apply fixed;
    // @apply min-h-[300px];
    @apply bg-zinc-100;
    @apply rounded-t-3xl;
    @apply bottom-0;
    @apply border border-zinc-200;
    @apply shadow-[0px_-5px_40px_0px] shadow-blog-primary/25;
    min-height: v-bind(clientHeight);
}
.v-enter-active,
.v-leave-active {
    @apply transition-[all_500ms_cubic-bezier(0.175,0.885,0.32,1.275)];
}

.v-enter-from,
.v-leave-to {
    bottom: v-bind(-clientHeight);
    @apply opacity-0;
}
.v-enter-to,
.v-leave-from {
    @apply opacity-100;
}
</style>
