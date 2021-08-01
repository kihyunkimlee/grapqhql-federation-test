import { Args, Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { CatEntity } from './entities/cat.entity';
import { CatsService } from './cats.service';

@Resolver((of) => CatEntity)
export class CatsResolver {
  constructor(private readonly catService: CatsService) {}

  @Query(() => CatEntity, {
    name: 'cat',
  })
  getCat(@Args('id') id: number): CatEntity {
    return this.catService.findCatById(id);
  }
}
