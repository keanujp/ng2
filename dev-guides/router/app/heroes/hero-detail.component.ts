import {Component, Input} from 'angular2/core';
import {Router, RouteParams} from 'angular2/router';
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
  selector: 'my-hero-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name"/>
      </div>
    </div>
  `,
  inputs: ['hero']
})
export class HeroDetailComponent {
  public hero: Hero;
  
  constructor(
    private router: Router,
    private routeParams: RouteParams,
    private service: HeroService
  ) {}
  
  ngOnInit() {
    console.log('on init');
    
    let id = this.routeParams.get('id');
    this.service.getHero(id).then(hero => this.hero = hero);
  }
}