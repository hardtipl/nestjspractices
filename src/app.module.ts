import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Bookmodule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Testmodule } from './testingnest/test.module';
@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: '101.53.146.129',
    //   port: 3306,
    //   username: 'inhousedbuser',
    //   password: '6hwuctsegmqlanbdfjri',
    //   database: 'inhousedb',
    //   // entities: [],
    //   synchronize: true,
    // }),
    TypeOrmModule.forRootAsync({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.development.env',
          // envFilePath: '.prod.env',
        }),
      ],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get('DB_HOST'),
        port: +configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
        entities: [__dirname + `/**/*.entities{.ts,.js}`],
        synchronize: true,
        logging: true,
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    Bookmodule,
    Testmodule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
