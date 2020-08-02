import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDatabase implements InMemoryDbService {
  createDb() {
    // @ts-ignore
    const beers = [
      { '_id': 1, 'name': 'Badabier', 'type': 'chopp' }
    ];
    return {beers};
  }

}
