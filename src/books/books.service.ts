import { Injectable } from '@nestjs/common';

@Injectable()
export class Booksservice {
  // Adding book
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
