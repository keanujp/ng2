import {Injectable} from 'angular2/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';

@Injectable()
export class HeroService {
  
  getPlainHeroes() {
    return HEROES;
  }
  
  getHeros() {
    return Promise.resolve(HEROES);
  }
  
  getSlowHeroes() {
    return new Promise<Hero[]>(
      resolve => setTimeout(() => resolve(HEROES), 2000)
    );
  }
  
  getHero(id) {
    return HEROES.find(hero => hero.id === id);
  }
}