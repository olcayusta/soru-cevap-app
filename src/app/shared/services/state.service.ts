import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  topbarDisplay$ = new BehaviorSubject<boolean>(true);
  topbarDisplay = this.topbarDisplay$.asObservable();

  constructor() {
  }

  show() {
    this.topbarDisplay$.next(true);
  }

  hide() {
    this.topbarDisplay$.next(false);
  }

}
