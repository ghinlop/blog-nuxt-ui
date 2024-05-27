import type { AuthFormBody } from "./auth.type";

function LOGIN(body: AuthFormBody) {}
function REGISTER(body: AuthFormBody) {}

export const useAuthController = { LOGIN, REGISTER };
