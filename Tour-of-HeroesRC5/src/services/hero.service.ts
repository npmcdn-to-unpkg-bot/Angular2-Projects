import {Injectable} from '@angular/core'
import { Hero } from '../heroDetail/hero';

import { Heroes } from '../heroDetail/mock-heroes';


@Injectable()
export class HeroService {
//  getHeroes() {
//   return Promise.resolve(Heroes);
// }

 getHeroSlowly() {
  return new Promise<Hero[]>(resolve =>
  setTimeout(()=>resolve(Heroes),2000)
  );
}
}