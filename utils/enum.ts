export enum ServerStatus {
    Success = 200,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    Forbidden = 403,
    MethodNotAllowed = 405,
    NotAcceptable = 406,
    RequestTimeout = 408,
    Conflict = 409,
    Gone = 410,
    PreconditionFailed = 412,
    PayloadTooLarge = 413,
    UnsupportedMediaType = 415,
    ImATeapot = 418,
    UnprocessableEntity = 422,
    InternalServerError = 500,
    NotImplemented = 501,
    BadGateway = 502,
    ServiceUnavailable = 503,
    GatewayTimeout = 504,
    HttpVersionNotSupported = 505,
}

export enum Role {
    SUPER_ADMIN = "super_admin",
    ADMIN = "admin",
    BANNED = "banned",
    USER = "user",
    GUEST = "guest",
}

export interface ServerResult<T> {
    status: ServerStatus;
    result?: T | undefined;
    message?: string | undefined;
}

export interface PaginationQuery {
    currentPage: number;
    lastPage: number;
    total: number;
    limit: number;
}

export interface PaginationType<T> {
    results: T[];
    pagination: PaginationQuery;
}
