import { Controller, Post } from '@nestjs/common';
import SignInService from 'src/services/auth/SignInService';

@Controller()
class AuthenticationController {
  constructor(private signInService: SignInService) {}
  @Post('/api/v1/auth/sign-in')
  signIn() {
    return this.signInService.signIn();
  }
}

export default AuthenticationController;
