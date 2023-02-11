import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Bookmodule } from './books/books.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { Testmodule } from './testingnest/test.module';
import { PageNotFound } from './PagenotFound/Pagenotfound.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.development.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('DB_CONNECTIONPATH'),
      }),
      inject: [ConfigService],
    }),
    Bookmodule,
    Testmodule,
    PageNotFound,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
