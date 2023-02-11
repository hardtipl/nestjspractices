import { NestFactory } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
import { AppModule } from './app.module';
// import ejs from 'ejs';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
// example of global middlewears
const globalmiddlewear = (req: Request, res: Response, next: NextFunction) => {
  console.log(`This is the global level middlewear`);
  next();
};

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setBaseViewsDir(join(__dirname, `..`, `views`));
  app.useStaticAssets(join(__dirname, `..`, `public`));
  app.setViewEngine('ejs');
  app.use(globalmiddlewear);
  await app.listen(3000);
}
bootstrap();
