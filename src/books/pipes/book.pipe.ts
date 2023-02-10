import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';

export class Bookpipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(
      value,
      'list of values',
      'metadatalist',
      metadata,
      typeof value,
    );
    // throw new Error('Method not implemented.');
    if (value.id === 1) return value;
    else throw new BadRequestException(`Validation failed`);
  }
}
