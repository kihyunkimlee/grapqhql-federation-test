import { Inject, Injectable } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';
import { DogEntity } from './entities/dog.entity';

@Injectable()
export class DogService {
  constructor(@Inject('PUB_SUB') private readonly pubsub: PubSub) {
    // 5초마다 barked 이벤트를 publish 합니다.
    this.tic();
  }

  tic(): void {
    setTimeout(() => {
      this.pubsub.publish('barked', { barked: '멍멍!' });

      this.tic();
    }, 5000);
  }

  findDogById(id: number): DogEntity {
    return {
      id: id,
      name: '멍멍이',
      age: 3,
    };
  }
}
