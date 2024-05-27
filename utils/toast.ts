const error = (description: string) => {
    useToast().add({
        icon: "i-heroicons:x-circle",
        description,
        color: "rose",
    });
};
const warning = (description: string) => {
    useToast().add({
        icon: "i-heroicons:exclamation-triangle",
        description,
        color: "orange",
    });
};
const info = (description: string) => {
    useToast().add({
        icon: "i-heroicons:exclamation-circle",
        description,
        color: "sky",
    });
};
const success = (description: string) => {
    useToast().add({
        icon: "i-heroicons:check-circle",
        description,
        color: "green",
    });
};

export const TOAST = {
    error,
    warning,
    info,
    success,
};
