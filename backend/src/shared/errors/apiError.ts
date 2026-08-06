export class ApiError extends Error {
    constructor(
        public statusCode: number,
        message: string
    ) {
        super(message);

        this.name = "ApiError";

        Error.captureStackTrace(this, this.constructor);
    }
}