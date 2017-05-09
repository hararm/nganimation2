import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('clickedState', [
      state('default', style({
        backgroundColor: 'orange',
        width: '100px',
        height: '100px'
      })),
      state('clicked', style({
        backgroundColor: 'blue',
        width: '300px',
        height: '50px'
      })),
      state('mouseDown', style({
        backgroundColor: 'red',
        border: '1px solid black',
        width: '100px',
        height: '100px'
      })),
      transition('default => clicked', animate('1000ms 500ms ease-in')),
      transition('clicked => default', animate(300)),
      transition('mouseDown <=> clicked', animate(300))
    ])
  ]
})
export class AppComponent {
  clickInfo = 'default';
  paragraphClick = 'default';
  numberEntred;

  onClick() {
    this.clickInfo = 'clicked';
    setTimeout(() => {
      this.clickInfo = 'default';
    }, 3000);
  }
}


