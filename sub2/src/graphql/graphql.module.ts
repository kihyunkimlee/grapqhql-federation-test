import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      cors: true,
      autoSchemaFile: join(process.cwd(), 'src/autogen/schema.gql'),
    }),
  ],
})
export class GraphqlModule {}
