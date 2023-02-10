import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Bookdto } from './books.dto';
import { Booksservice } from './books.service';
import { Bookpipe } from './pipes/book.pipe';
@Controller('book')
export class Bookcontroller {
  constructor(private bookService: Booksservice) {}

  //   to add the book
  @Post('/add')
  addbook(@Body(new Bookpipe()) bookbody: Bookdto) {
    console.log(bookbody);
    return this.bookService.addingbook();
  }

  // update book
  @Put('/update')
  updatebook() {
    return this.bookService.updateingbook();
  }

  //   delete book
  @Delete('delete')
  deletebook() {
    return this.bookService.deleteingbook();
  }
  // list all book
  @Get('books')
  listbook() {
    return this.bookService.fetchingbooks();
  }
  // fetch single book
  @Get('/books/:bookid')
  fetchbook(@Param() params) {
    console.log(params);
    return this.bookService.fetchbook(params.bookid);
  }
  @Get('/books/:bookid/:subid')
  fetchbooksub(@Param('subid', ParseIntPipe) params) {
    console.log(params);
    return this.bookService.fetchbook(params);
  }
}
