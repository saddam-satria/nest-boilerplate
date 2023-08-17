import { NestFactory } from '@nestjs/core';
import { config } from 'dotenv';
import { AllowedIP, PORT } from './config/constant';
import AppModule from './modules/AppModule';

(async () => {
  config({
    path: '.env',
  });
  const app = await NestFactory.create(AppModule, { cors: true });
  app.enableCors({
    origin: AllowedIP,
  });
  await app.listen(PORT);
})();
