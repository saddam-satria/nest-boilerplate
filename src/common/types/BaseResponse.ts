type TBaseResponse<T> = {
  message: string;
  statusCode: number;
  data: T;
};

export default TBaseResponse;
