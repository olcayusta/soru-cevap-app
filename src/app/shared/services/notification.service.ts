import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Notification} from '../models/notification.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(
    private http: HttpClient
  ) {
  }

  getUnseenCount(): Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}/unseen_count`);
  }
}
