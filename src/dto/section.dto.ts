import { Expose } from 'class-transformer';
import { IsString, MinLength } from 'class-validator';

export class CreateSectionDto {
  @Expose()
  @IsString()
  @MinLength(3)
  name!: string;

  @Expose()
  @IsString()
  @MinLength(3)
  status!: string;
}
