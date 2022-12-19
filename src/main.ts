import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { VersioningType } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 设置全局路由前缀
  app.setGlobalPrefix('api');
  // 开启版本控制
  app.enableVersioning({
    type: VersioningType.URI,
  });
  // 允许跨域
  app.enableCors();
  await app.listen(9080);
}
bootstrap();
