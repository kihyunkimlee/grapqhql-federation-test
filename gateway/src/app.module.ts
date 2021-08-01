import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphqlModule } from './modules/graphql/graphql.module';
import { PetModule } from './modules/pet/pet.module';

@Module({
  imports: [GraphqlModule, PetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
