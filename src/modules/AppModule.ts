import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import JwtModule from 'src/components/JWT/JWTModule';
import AppController from 'src/controllers/AppController';
import AppService from 'src/services/AppService';
import AuthenticationModule from './AuthenticationModule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { STATIC_ASSETS } from 'src/config/constant';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [JwtModule, AuthenticationModule, ServeStaticModule.forRoot({
    rootPath: STATIC_ASSETS,
    serveRoot: '/assets',
    serveStaticOptions: {
      cacheControl: true,
    },
  })],
})
class AppModule implements NestModule {
  /**
   * configure
   */
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('*');
  }
}

export default AppModule;
