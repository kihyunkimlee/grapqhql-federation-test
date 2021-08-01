import {
  Args,
  Resolver,
  Query,
} from '@nestjs/graphql';
import { DogEntity } from './entities/dog.entity';
import { DogService } from './dog.service';

@Resolver((of) => DogEntity)
export class DogResolver {
  constructor(private readonly dogService: DogService) {}

  @Query(() => DogEntity, {
    name: 'dog',
  })
  dog(@Args('id') id: number): DogEntity {
    return this.dogService.findDogById(id);
  }
}
