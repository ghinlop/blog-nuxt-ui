<script lang="ts" setup>
import { useAuthController } from "~/modules/auth/auth.controller";
import { useAuthState, usePasswordState } from "~/modules/auth/auth.state";

definePageMeta({
    layout: "user",
});

const { show: password, type: passwordType } = usePasswordState();
const { body } = useAuthState();
const { LOGIN } = useAuthController;
</script>

<template>
    <UForm :state="body" @click="() => LOGIN(body)" class="flex flex-col">
        <h2 class="text-2xl font-bold text-center mb-9">Forgot Password</h2>

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

            <UButton type="submit" block size="2xl">SUBMIT</UButton>
            <p class="text-center">
                Already Have An Account?
                <NuxtLink
                    tag="a"
                    :to="{ name: 'signUp' }"
                    class="inline font-bold text-blog-primary"
                    >Log In</NuxtLink
                >
            </p>
        </div>
    </UForm>
</template>

<style scoped></style>
