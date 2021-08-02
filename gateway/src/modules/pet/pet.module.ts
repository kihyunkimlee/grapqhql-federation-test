import { Module } from '@nestjs/common';
import { PetResolver } from './pet.resolver';
import { PetService } from './pet.service';
import { PubSub } from 'graphql-subscriptions';

@Module({
  providers: [
    PetResolver,
    PetService,
    // {
    //   provide: 'PUB_SUB',
    //   useValue: new PubSub(),
    // },
  ],
})
export class PetModule {}
