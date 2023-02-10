import { NestFactory } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
import { AppModule } from './app.module';

// example of global middlewears
const globalmiddlewear = (req: Request, res: Response, next: NextFunction) => {
  console.log(`This is the global level middlewear`);
  next();
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(globalmiddlewear);
  await app.listen(3000);
}
bootstrap();
