import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const SERVER_URL = 'http://localhost:9001/subscription';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  constructor(private http: HttpClient) {
  }

  sendSubscriptionToTheServer(subscription: PushSubscription): Observable<any> {
    return this.http.post(SERVER_URL, subscription);
  }
}
