import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';
import { delay, retryWhen, tap } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  subject = webSocket({
    url: 'ws://localhost:9001',
    protocol: localStorage.getItem('token')
  });

  constructor() {
/*    this.subject.pipe(
      retryWhen(errors => errors.pipe(
        tap(err => { console.error('Got error', err);}),
        delay(1000)
      ))
    ).subscribe(data => console.log(data), error => console.error(error));*/
    // this.connect();
  }

  connect(): void {
    this.subject.subscribe();
    this.subject.next('Test!');
  }

  disconnect(): void {
    this.subject.unsubscribe();
  }
}
