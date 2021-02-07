import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { User } from '../../shared/models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  API_URL = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAccount(): Observable<User> {
    return this.http.get<User>(`${this.API_URL}/me`);
  }
}
