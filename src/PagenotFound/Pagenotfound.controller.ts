import { Controller, Get, Res } from '@nestjs/common';

@Controller('')
export class PagenotFoundcontroller {
  @Get('*')
  notFound(@Res() res) {
    res.render('pagenotfound');
  }
}
