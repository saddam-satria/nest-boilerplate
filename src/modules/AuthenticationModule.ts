import { Module } from '@nestjs/common';
import PasswordEncoderModule from 'src/components/PasswordEncoder/PasswordEncoderModule';
import AuthenticationController from 'src/controllers/AuthenticationController';
import SignInService from 'src/services/auth/SignInService';

@Module({
  controllers: [AuthenticationController],
  providers: [SignInService],
  exports: [AuthenticationModule],
  imports: [PasswordEncoderModule],
})
class AuthenticationModule {}

export default AuthenticationModule;
