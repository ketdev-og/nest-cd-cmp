import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsService } from './songs/songs.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { SongsController } from './songs/songs.controller';

@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService, SongsService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // consumer.apply(LoggerMiddleware).forRoutes('songs');  option 1
    // consumer.apply(LoggerMiddleware).forRoutes({
    //   path: 'songs',
    //   method: RequestMethod.POST,
    // }); //option 2, select method that should have the middlewares

    consumer.apply(LoggerMiddleware).forRoutes(SongsController); //Option 3 use for the entire controller
  }
}
