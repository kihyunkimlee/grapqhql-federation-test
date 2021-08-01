import { Module } from '@nestjs/common';
import { DogResolver } from './dog.resolver';
import { DogService } from './dog.service';

@Module({
  providers: [
    DogResolver,
    DogService,
  ],
})
export class DogModule {}
