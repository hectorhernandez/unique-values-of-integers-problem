import { Injectable } from '@angular/core';
import { take, map } from 'rxjs/operators';
import { interval, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  // example array
  private arrTimeout = 1000;
  private arr: number[] = [5, 10, 9, 5, 7, 9, 3, 4, 5, 1, 1, 9, 9, 7, 8];
  public arr$: Observable<number[]> = interval(this.arrTimeout)
    .pipe(
      take(this.arr.length + 1),
      map(i => this.arr.slice(0, i))
    );

  constructor() {
  }

}