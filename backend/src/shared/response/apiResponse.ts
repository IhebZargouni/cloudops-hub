export function successResponse(

    data: any,

    message = "Success"

) {

    return {

        success: true,

        message,

        data

    };

}