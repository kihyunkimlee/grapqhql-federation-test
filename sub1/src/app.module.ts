import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsResolver } from './modules/cats/cats.resolver';
import { CatsModule } from './modules/cats/cats.module';
import { GraphqlModule } from './graphql/graphql.module';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [CatsModule, GraphqlModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
