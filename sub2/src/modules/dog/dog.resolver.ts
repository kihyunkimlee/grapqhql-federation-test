import {Args, Resolver} from '@nestjs/graphql';
import {DogEntity} from "./entities/dog.entity";
import {DogService} from "./dog.service";

@Resolver((of) => DogEntity)
export class DogResolver {
  constructor(private readonly dogService: DogService) {}

  @Resolver('dog')
  dog(@Args('id') id: number): DogEntity {
    return this.dogService.findDogById(id);
  }
}
