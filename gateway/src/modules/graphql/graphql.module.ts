import { Module } from '@nestjs/common';
import { GraphQLGatewayModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLGatewayModule.forRoot({
      gateway: {
        serviceList: [
          { name: 'sub1', url: 'http://localhost:3001/graphql' },
          // { name: 'sub2', url: 'http://localhost:3002/graphql'},
        ],
      },
      server: {
        installSubscriptionHandlers: true,
        cors: true,
      },
    }),
  ],
})
export class GraphqlModule {}
