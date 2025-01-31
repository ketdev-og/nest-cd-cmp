import { Injectable } from '@nestjs/common';
import { CreateSongDto } from './dto/create-song-dto';

@Injectable()
export class SongsService {
  private readonly songs = [];

  async create(song: CreateSongDto) {
    this.songs.push(song);
    return this.songs;
  }

  async findAll() {
    return this.songs;
  }

  async find(id: number) {
    return this.songs.at(id);
  }
}
