<script lang="ts" setup>
definePageMeta({
    layout: "user",
});
</script>

<template>
    <UForm :state="{}" class="flex flex-col">
        <h2 class="text-2xl font-bold text-center">Sign Up To eatly</h2>
        <div class="grid grid-cols-2 gap-5 mt-9 mb-6">
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
                <UInput type="password" color="violet" size="xl" placeholder="••••••••">
                    <template #leading>
                        <Icon class="text-blog-primary" name="i-fa6-solid:lock"></Icon>
                    </template>
                    <template #trailing>
                        <UButton variant="link" icon="i-fa6-solid:eye-slash"> </UButton>
                    </template>
                </UInput>
            </UFormGroup>
            <UButton type="submit" block size="2xl">SIGN UP</UButton>
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
