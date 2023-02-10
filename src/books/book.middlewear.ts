import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
@Injectable()
export class Bookmiddlewear implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(
      `This is just will work on the book module & class base approach to use middlewear`,
    );
    // throw new Error('Method not implemented.');
    next();
  }
}
