import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Response } from 'express';
import { Bookdto } from './books.dto';
import { Testsservice } from './test.service';
@Controller('testers')
@ApiTags('testers')
export class Testcontroller {
  constructor(private bookService: Testsservice) {}

  //   to add the test
  @Post('/add')
  addbook(@Body() bookbody: Bookdto) {
    console.log(bookbody);
    return this.bookService.addingbook();
  }

  // welcome book
  @Get('/welcome')
  welocomebook(@Res() res: Response) {
    return res.render('index', { name: `Hard sheth` });
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
