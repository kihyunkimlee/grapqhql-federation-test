import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogResolver } from './modules/dog/dog.resolver';
import { DogService } from './module/dog/dog.service';
import { DogService } from './modules/dog/dog.service';
import { DogModule } from './modules/dog/dog.module';

@Module({
  imports: [DogModule],
  controllers: [AppController],
  providers: [AppService, DogResolver, DogService],
})
export class AppModule {}
