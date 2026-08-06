import { Request, Response, NextFunction } from "express";
import { ApiError } from "../shared/errors/apiError";

export function errorHandler(
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {

    if (error instanceof ApiError) {

        return res.status(error.statusCode).json({

            success: false,

            message: error.message

        });

    }

    console.error(error);

    return res.status(500).json({

        success: false,

        message: "Internal Server Error"

    });

}