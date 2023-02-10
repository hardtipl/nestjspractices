import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Testcontroller } from './test.controller';
import { Testsservice } from './test.service';
import { Mynameishard } from './testingnest.entities';

@Module({
  imports: [TypeOrmModule.forFeature([Mynameishard])],
  controllers: [Testcontroller],
  providers: [Testsservice],
})
export class Testmodule {
  constructor() {
    console.log(`Congrats, Test module is integrated`);
  }
}
