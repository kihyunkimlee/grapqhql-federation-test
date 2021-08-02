import { Query, Resolver, Subscription } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';

@Resolver()
export class PetResolver {
  constructor(/* @Inject('PUB_SUB') private readonly pubsub: PubSub */) {}

  @Query(() => String)
  dummyQuery(): string {
    return 'Hello World!';
  }

  // @Subscription(() => String)
  // barked() {
  //   return this.pubsub.asyncIterator('barked');
  // }
}
