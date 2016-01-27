import {Component} from 'angular2/core';

@Component({
  selector: 'crisis-list',
  template: `
    <div>Crisis</div>
    `
})
export class CrisisListComponent {
  constructor() {
    console.log('new crisis');
  } 
}