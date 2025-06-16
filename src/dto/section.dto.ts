import { Expose } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';

export class CreateSectionDto {
  @Expose()
  @IsString({always: true})
  @MinLength(3, {always: true})
  name!: string;

  @Expose()
  @IsString({always: true})
  @MinLength(3, {always: true})
  status!: string;
}
