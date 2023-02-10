import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Mynameishard } from './testingnest.entities';

@Injectable()
export class Testsservice {
  // Adding book
  constructor(
    @InjectRepository(Mynameishard) private testtable: Repository<Mynameishard>,
  ) {}
  addingbook() {
    return `Book has been added`;
  }
  //   update book
  updateingbook() {
    return `book has been updated`;
  }
  // delete book
  deleteingbook() {
    return `Book has been deleted`;
  }
  // listing all books
  fetchingbooks() {
    return `listing all the books`;
  }
  // fetching single book
  fetchbook(bookid: number): string {
    return `listing single the books bookid is ${bookid}`;
  }
}
