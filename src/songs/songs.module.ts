import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';

const mockService = {
  findAll() {
    return [{ id: 1, title: 'ketem-mock' }];
  },
};
@Module({
  controllers: [SongsController],
  providers: [
    SongsService,
    {
      provide: SongsService,
      useValue: mockService,
    },
  ],
})
export class SongsModule {}
