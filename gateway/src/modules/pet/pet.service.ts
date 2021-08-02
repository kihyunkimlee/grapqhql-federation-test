import { Inject, Injectable } from '@nestjs/common';
import { PubSub } from 'graphql-subscriptions';

@Injectable()
export class PetService {
  // constructor(@Inject('PUB_SUB') private readonly pubsub: PubSub) {
  //   // 5초마다 barked 이벤트를 publish 합니다.
  //   this.tic();
  // }
  //
  // tic(): void {
  //   setTimeout(() => {
  //     this.pubsub.publish('barked', { barked: '멍멍!' });
  //
  //     this.tic();
  //   }, 5000);
  // }
}
