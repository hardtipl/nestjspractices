import { NestFactory } from '@nestjs/core';
import { NextFunction, Request, Response } from 'express';
import { AppModule } from './app.module';
// import ejs from 'ejs';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
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
  const config = new DocumentBuilder()
    .setTitle('Example of Swagger')
    .setDescription('How to create swagger in nest js')
    .setVersion('1.0')
    .addTag('cats')
    .addBearerAuth({
      type:'http',
      scheme:'bearer',
      bearerFormat:"JWT",
      name:'JWT',
      description:`Enter Jwt token`,
      in:`header`
    },`JWT-auth`)
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
