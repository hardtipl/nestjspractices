import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { BookDocument } from './schema/book';

@Injectable()
export class Testsservice {
  // Adding book
  constructor(
    @InjectModel('Books') private followingbooks: Model<BookDocument>,
  ) {}
  addingbook() {
    // return this.followingbooks.save
  }
  //   update book
  updateingbook() {
    return this.followingbooks.find().exec()
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
