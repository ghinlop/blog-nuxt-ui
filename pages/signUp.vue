<script lang="ts" setup>
import { useAuthState, usePasswordState } from "~/modules/auth/auth.state";

definePageMeta({
    layout: "user",
});

const { show: password, type: passwordType } = usePasswordState();
const { show: retype_password, type: retype_passwordType } = usePasswordState();
const { body, loading, REGISTER } = useAuthState();
</script>

<template>
    <UForm :state="body" :loading @submit="REGISTER" class="flex flex-col">
        <h2 class="text-2xl font-bold text-center mb-9">Sign Up To eatly</h2>
        <div class="grid grid-cols-2 gap-5 mb-6">
            <div class="col-span-1">
                <UButton
                    block
                    color="gray"
                    variant="soft"
                    :ui="{ variant: { soft: 'bg-[#F5F5F5] hover:bg-[#cdcccc]' } }"
                    size="2xl"
                >
                    <Icon size="31" name="i-bx:bxl-google"></Icon>
                </UButton>
            </div>
            <div class="col-span-1">
                <UButton
                    block
                    color="gray"
                    variant="soft"
                    :ui="{ variant: { soft: 'bg-[#F5F5F5] hover:bg-[#cdcccc]' } }"
                    size="2xl"
                >
                    <Icon size="31" name="i-bx:bxl-apple"></Icon>
                </UButton>
            </div>
        </div>
        <p class="text-center text-[#005A64]/35 mb-8">OR</p>
        <div class="flex flex-col gap-4">
            <UFormGroup>
                <UInput color="violet" size="xl" placeholder="Tom Hillson">
                    <template #leading>
                        <Icon
                            class="text-blog-primary"
                            name="i-fa6-solid:user-large"
                        ></Icon>
                    </template>
                </UInput>
            </UFormGroup>
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
            <UFormGroup>
                <UInput
                    :type="passwordType"
                    color="violet"
                    size="xl"
                    placeholder="••••••••"
                    v-model="body.password"
                >
                    <template #leading>
                        <Icon class="text-blog-primary" name="i-fa6-solid:lock"></Icon>
                    </template>
                    <template #trailing>
                        <UButton
                            variant="link"
                            :icon="password ? 'i-fa6-solid:eye' : 'i-fa6-solid:eye-slash'"
                            @click="password = !password"
                        >
                        </UButton>
                    </template>
                </UInput>
            </UFormGroup>
            <UFormGroup>
                <UInput
                    :type="retype_passwordType"
                    color="violet"
                    size="xl"
                    placeholder="••••••••"
                    v-model="body.retype_password"
                >
                    <template #leading>
                        <Icon class="text-blog-primary" name="i-fa6-solid:lock"></Icon>
                    </template>
                    <template #trailing>
                        <UButton
                            variant="link"
                            :icon="
                                retype_password
                                    ? 'i-fa6-solid:eye'
                                    : 'i-fa6-solid:eye-slash'
                            "
                            @click="retype_password = !retype_password"
                        >
                        </UButton>
                    </template>
                </UInput>
            </UFormGroup>
            <UButton type="submit" block size="2xl" class="min-h-[55px]">SIGN UP</UButton>
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
