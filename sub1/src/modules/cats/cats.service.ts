import { Injectable } from '@nestjs/common';
import { CatEntity } from './entities/cat.entity';

@Injectable()
export class CatsService {
  findCatById(id: number): CatEntity {
    return {
      id: id,
      name: '나비',
      age: 3,
    };
  }
}
