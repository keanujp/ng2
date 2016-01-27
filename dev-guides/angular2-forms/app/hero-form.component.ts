import {Component} from 'angular2/core';
import {Hero} from './hero';
@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero-form.component.html'
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  
  // TODO remove
  get diagnostic() {
    return JSON.stringify(this.model);
  }
}