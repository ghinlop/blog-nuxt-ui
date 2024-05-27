<script lang="ts" setup>
import { useAuthState } from "~/modules/auth/auth.state";

definePageMeta({
    layout: "user",
});

const { body, loading, FORGOT } = useAuthState();
</script>

<template>
    <UForm :state="body" :loading @submit="FORGOT" class="flex flex-col">
        <h2 class="text-2xl font-bold text-center mb-9">Forgot Your Password</h2>
        <div class="flex flex-col gap-4">
            <UFormGroup>
                <UInput
                    type="email"
                    color="violet"
                    size="xl"
                    placeholder="TomHill@Mail.com"
                    v-model="body.email"
                >
                    <template #leading>
                        <Icon
                            class="text-blog-primary"
                            name="i-fa6-solid:envelope"
                        ></Icon>
                    </template>
                </UInput>
            </UFormGroup>
            <UButton type="submit" block size="2xl" class="min-h-[55px]">SEND</UButton>
            <p class="text-center">
                Already Have An Account?
                <NuxtLink
                    tag="a"
                    :to="{ name: 'signIn' }"
                    class="inline font-bold text-blog-primary"
                    >Log In</NuxtLink
                >
            </p>
        </div>
    </UForm>
</template>

<style scoped></style>
