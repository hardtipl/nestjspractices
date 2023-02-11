import { Controller, Get, Res } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Page not found')
export class PagenotFoundcontroller {
  @Get('*')
  notFound(@Res() res) {
    res.render('pagenotfound');
  }
}
