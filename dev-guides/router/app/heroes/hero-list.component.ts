import {Component} from 'angular2/core';
import {Router} from 'angular2/router';

import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
  selector: 'hero-list',
  directives: [HeroDetailComponent],
  template: `
    <h4>heroes</h4>
    <ul>
      <li *ngFor="#hero of heroes" (click)="onSelect(hero)">
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
    `
})
export class HeroListComponent {
  
  heroes = [];
  
  selectedHero: Hero;
  
  constructor(
      private router: Router,
      private heroService: HeroService) {
        
    console.log('new hero list');
    this.heroes = heroService.getPlainHeroes();
  }
  
  onSelect(hero: Hero) {
    this.router.navigate(['HeroDetail', {id: hero.id}]);
  }
}