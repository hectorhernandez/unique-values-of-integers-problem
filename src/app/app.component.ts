import { Component, OnInit } from '@angular/core';
import { take, map } from 'rxjs/operators';
import { interval, Observable } from 'rxjs';
import { AppService } from './app.service';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
  styles: [`h1 { font-family: Lato; }`]
})
export class AppComponent {
  title = 'FT Distinct Values Problem';
  // Give an array of integers find the Distinct values, sort ascending order and write those values to the dom

  arr$: Observable<number[]>;

  constructor(service: AppService) {
    this.arr$ = service.arr$;
  }

}
