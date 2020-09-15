import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { delay, retryWhen, tap } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';
import { Observable } from 'rxjs';

interface SubjectData {
  event: string;
  payload: object;
}

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  subject: WebSocketSubject<SubjectData> = webSocket({
    url: 'ws://localhost:9001/notification',
    protocol: localStorage.getItem('token')
  });

  constructor() {
    /*    this.subject.pipe(
          retryWhen(errors => errors.pipe(
            tap(err => { console.error('Got error', err);}),
            delay(1000)
          ))
        ).subscribe(data => console.log(data), error => console.error(error));*/
    this.connect();
  }

  sendMessage(message: string): void {
    this.subject.subscribe();
    this.subject.next({
      event: 'message',
      payload: {
        content: message
      }
    });
  }

  on(event: string): Observable<{ event: string, payload: object }> {
    return new Observable(subscriber => {
      this.subject.subscribe(value => {
        if (value.event === event) {
          subscriber.next(value);
        }
      });
    });
  }

  connect(): void {
    this.subject.subscribe();
    // this.subject.next('Test!');
  }

  disconnect(): void {
    this.subject.unsubscribe();
  }
}
