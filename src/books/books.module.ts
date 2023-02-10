import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { Bookmiddlewear } from './book.middlewear';
import { Bookcontroller } from './books.controller';
import { Booksservice } from './books.service';

@Module({
  imports: [],
  controllers: [Bookcontroller],
  providers: [Booksservice],
})
export class Bookmodule implements NestModule {
  constructor() {
    console.log(`Congrats, book module is integrated`);
  }
  configure(consumer: MiddlewareConsumer) {
    // throw new Error('Method not implemented.');
    consumer.apply(Bookmiddlewear).forRoutes('book');
  }
}
