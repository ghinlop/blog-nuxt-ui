import Joi from "joi";
import { Role } from "~/utils/enum";
const full_name = Joi.string()
    .min(6)
    .max(15)
    .invalid("admin", "administrator", "mod")
    .empty()
    .label("Display name")
    .messages({
        "string.min": "Minimum 5 characters required",
        "string.max": "Maximum 15 characters required",
        "string.invalid": "Display name is not accepted",
        "any.empty": "Display name is not empty",
    });

const password = Joi.string().min(5).required().empty().label("Password").messages({
    "any.required": "Password is not empty",
    "string.min": "Minimum 5 characters required",
    "any.empty": "Password is not empty",
});
const retype_password = Joi.any()
    .valid(Joi.ref("password"))
    .required()
    .empty()
    .label("Retype password")
    .messages({
        "any.required": "Retype password is not empty",
        "any.only": "Password and Retyped Password do not match",
        "any.empty": "Retype password is not empty",
    });

const email = Joi.string()
    .email({ tlds: { allow: false } })
    .empty()
    .required()
    .label("Email address")
    .messages({
        "any.required": "Email address is not empty",
        "string.email": "Email address is not valid",
        "any.empty": "Email address is not empty",
    });

const role = Joi.string()
    .valid(Role.ADMIN, Role.BANNED, Role.GUEST, Role.USER)
    .label("Role");

export const AUTH_VALID = {
    login: Joi.object({
        email,
        password,
    }),
    register: Joi.object({
        full_name,
        email,
        password,
        retype_password,
    }),
    forgot: Joi.object({
        email,
    }),
};
