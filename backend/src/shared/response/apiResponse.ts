export function successResponse<T>(
  data: T,

  message = 'Success',
) {
  return {
    success: true,

    message,

    data,
  };
}
