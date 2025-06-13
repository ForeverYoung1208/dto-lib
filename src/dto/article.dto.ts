import { Expose } from 'class-transformer';
import { IsOptional, IsString, MinLength } from 'class-validator';
import { ValidationGroups } from '../const';

export class CreateArticleDto {
  @Expose()
  @IsString({always: true})
  @MinLength(4, {always: true})
  name!: string;

  @Expose()
  @IsString({always: true})
  @MinLength(1, {always: true})
  sectionId!: string;

  @Expose()
  @IsString({always: true})
  @MinLength(4, {always: true})
  content!: string;

  @Expose()
  @IsString({always: true})
  @MinLength(1, {groups: [ValidationGroups.BE]})
  status!: string;

  @Expose()
  @IsOptional({always: true})
  @IsString({always: true})
  userId?: string;
}
