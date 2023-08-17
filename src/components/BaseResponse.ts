import TBaseResponse from 'src/common/types/BaseResponse';

class BaseResponse {
  public static success<T>(
    statusCode: number,
    message: string,
    data: T,
  ): TBaseResponse<T> {
    return {
      data,
      message,
      statusCode,
    };
  }
  public static error<T>(
    statusCode: number,
    message: string,
    data: T,
  ): TBaseResponse<T> {
    return {
      data,
      message,
      statusCode,
    };
  }
}

export default BaseResponse;
