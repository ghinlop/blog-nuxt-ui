export type AuthFormBody = {
    email?: string;
    password?: string;
    retype_password?: string;
    full_name?: string;
};

export type AuthLoading = {
    [key: string | "login" | "register" | "forgot"]: boolean;
};
