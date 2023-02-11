import { ApiProperty } from "@nestjs/swagger";

export class Bookdto {
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
}
