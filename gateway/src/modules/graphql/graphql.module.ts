import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      gateway: {
        serviceList: [
          { name: 'sub1', url: 'http://sub1:3001/graphql' },
          { name: 'sub2', url: 'http://sub2:3002/graphql' },
        ],
      },
      server: {
        cors: true,
        installSubscriptionHandlers: true,
      },
    }),
  ],
})
export class GraphqlModule {}
