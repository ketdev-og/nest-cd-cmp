import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDto } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}

  @Get()
  async findAll() {
    return await this.songService.findAll();
  }

  @Post()
  async createSong(@Body() createSongDTO: CreateSongDto) {
    try {
      return await this.songService.create(createSongDTO);
    } catch (error) {
      throw new HttpException(
        'server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
        {
          cause: error,
        },
      );
    }
  }

  //   @Get(':id')
  //   async findOne(@Param('id', new ParseIntPipe()) id: number) {
  //     return this.songService.find(id);
  //   }

  @Get(':id')
  async findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ) {
    return this.songService.find(id);
  }
}
