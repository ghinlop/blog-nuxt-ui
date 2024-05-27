export const usePasswordState = () => {
    const show = ref(false);
    const timeout = ref<NodeJS.Timeout | undefined>(undefined);

    watch(show, (value) => {
        if (!value && timeout.value) {
            clearTimeout(timeout.value);
            timeout.value = undefined;
            return;
        }
        timeout.value = setTimeout(() => (show.value = false), 3000);
    });

    const type = computed(() => (show.value ? "text" : "password"));

    function SetState(value: boolean) {
        show.value = value;
    }

    return { show, type, SetState };
};

export const useAuthState = () => {
    const body = reactive<{
        email?: string;
        password?: string;
        full_name?: string;
    }>({});

    return { body };
};
