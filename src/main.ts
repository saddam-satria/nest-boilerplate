import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';

(async () => {
  config({
    path: '.env',
  });
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);
  await app.listen(PORT);
})();
