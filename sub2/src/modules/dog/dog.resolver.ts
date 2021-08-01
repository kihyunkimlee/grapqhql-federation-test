import {
  Args,
  Resolver,
  Query,
  ResolveReference,
  Subscription,
} from '@nestjs/graphql';
import { DogEntity } from './entities/dog.entity';
import { DogService } from './dog.service';
import { Inject } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';

@Resolver((of) => DogEntity)
export class DogResolver {
  constructor(
    private readonly dogService: DogService,
    @Inject('PUB_SUB') private readonly pubsub: PubSub,
  ) {}

  @Query(() => DogEntity, {
    name: 'dog',
  })
  dog(@Args('id') id: number): DogEntity {
    return this.dogService.findDogById(id);
  }

  @Subscription(() => String)
  barked() {
    return this.pubsub.asyncIterator('barked');
  }
}
