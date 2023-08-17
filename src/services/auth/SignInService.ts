import { HttpStatus, Injectable } from '@nestjs/common';
import AbstractService from 'src/components/AbstractService';
import BaseResponse from 'src/components/BaseResponse';

@Injectable()
class SignInService extends AbstractService {
  public signIn() {
    return BaseResponse.success<null>(
      HttpStatus.OK,
      this.getMessage('AUTH_SUCCESS_LOGIN'),
      null,
    );
  }
}

export default SignInService;
