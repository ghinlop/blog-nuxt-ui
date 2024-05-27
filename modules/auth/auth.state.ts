import type { AuthFormBody, AuthLoading } from "./auth.type";
import { AUTH_VALID } from "./auth.valid";

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
    const body = reactive<AuthFormBody>({});
    const loading = reactive<AuthLoading>({
        login: false,
        register: false,
        forgot: false,
    });

    function Login() {
        const { error } = AUTH_VALID.login.validate(body);
        if (error) {
            TOAST.error(error.message);
            return;
        }

        loading.login = true;
        setTimeout(() => (loading.login = false), 5000);
    }

    function Register() {
        const { error } = AUTH_VALID.register.validate(body);
        if (error) {
            TOAST.error(error.message);
            return;
        }
    }

    function Forgot() {
        const { error } = AUTH_VALID.forgot.validate(body);
        if (error) {
            TOAST.error(error.message);
            return;
        }
    }

    function Clear_form() {
        body.email = undefined;
        body.password = undefined;
        body.retype_password = undefined;
        body.full_name = undefined;
    }

    return {
        body,
        loading,
        Login,
        Register,
        Forgot,
        Clear_form,
    };
};
