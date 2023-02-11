import { Module } from '@nestjs/common';
import { PagenotFoundcontroller } from './Pagenotfound.controller';

@Module({
  imports: [],
  controllers: [PagenotFoundcontroller],
  providers: [],
})
export class PageNotFound {
  constructor() {
    console.log(`Congrats ! page not Found implemented`);
  }
}
