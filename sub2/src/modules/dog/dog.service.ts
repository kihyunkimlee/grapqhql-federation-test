import { Inject, Injectable } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { DogEntity } from './entities/dog.entity';

@Injectable()
export class DogService {
  constructor(@Inject('PUB_SUB') private readonly pubsub: PubSub) {}

  findDogById(id: number): DogEntity {
    return {
      id: id,
      name: '멍멍이',
      age: 3,
    };
  }
}
