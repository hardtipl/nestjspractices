import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Bookschema } from './schema/book';
import { Testcontroller } from './test.controller';
import { Testsservice } from './test.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Books',
        schema: Bookschema,
      },
    ]),
  ],
  controllers: [Testcontroller],
  providers: [Testsservice],
})
export class Testmodule {
  constructor() {
    console.log(`Congrats, Test module is integrated`);
  }
}
