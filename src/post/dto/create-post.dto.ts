import { IsNotEmpty, IsString, IsInt, MinLength } from 'class-validator';

export class CreatePostDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10) 
  content: string;

  @IsNotEmpty()
  @IsInt()
  userId: number;
}