import { Expose } from 'class-transformer';
import { IsOptional, IsString, MinLength } from 'class-validator';
import { ValidationGroups } from '..';

export class CreateArticleDto {
  @Expose()
  @IsString()
  @MinLength(4)
  name!: string;

  @Expose()
  @IsString()
  @MinLength(1)
  sectionId!: string;

  @Expose()
  @IsString()
  @MinLength(4)
  content!: string;

  @Expose()
  @IsString()
  @MinLength(1, {groups: [ValidationGroups.BE]})
  status!: string;

  @Expose()
  @IsOptional()
  @IsString()
  userId?: string;
}
