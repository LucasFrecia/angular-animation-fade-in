import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import {trigger, style, animate, transition} from '@angular/animations';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(2000, style({opacity: 1}))
      ]) 
    ])
  ]
}) 

export class AppComponent {
   unchecked: any = [ 1,  2, 3];

   add() {
     this.unchecked.push(this.unchecked.length + 1);
   }
}
