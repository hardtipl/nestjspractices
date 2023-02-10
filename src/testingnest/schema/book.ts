import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type BookDocument = Book & Document;

@Schema()
export class Book {
  @Prop()
  title: string;
  @Prop()
  author: string;
  @Prop()
  paperback: boolean;
  @Prop()
  lanched: Date;
}

export const Bookschema = SchemaFactory.createForClass(Book);
