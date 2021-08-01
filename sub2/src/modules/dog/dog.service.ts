import { Injectable } from '@nestjs/common';
import { DogEntity } from './entities/dog.entity';

@Injectable()
export class DogService {
  constructor() {}

  findDogById(id: number): DogEntity {
    return {
      id: id,
      name: '멍멍이',
      age: 3,
    };
  }
}
