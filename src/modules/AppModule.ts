import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import JwtModule from 'src/components/JWT/JWTModule';
import AppController from 'src/controllers/AppController';
import FootPrintMiddleware from 'src/middlewares/FootPrintMiddleware';
import AppService from 'src/services/AppService';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [JwtModule],
})
class AppModule implements NestModule {
  /**
   * configure
   */
  public configure(consumer: MiddlewareConsumer) {
    consumer.apply(FootPrintMiddleware).forRoutes('*');
  }
}

export default AppModule;
