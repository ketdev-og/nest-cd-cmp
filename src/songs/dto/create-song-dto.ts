import { IsArray, IsNotEmpty, IsString } from 'class-validator';

export class CreateSongDto {
  @IsString({ message: 'title must be a string' })
  @IsNotEmpty({ message: 'title cannot be empty' })
  readonly title: string;

  @IsNotEmpty({ message: 'artist cannot be empty' })
  @IsArray({ message: 'artist must be an array ' })
  readonly artist: string[];
}
