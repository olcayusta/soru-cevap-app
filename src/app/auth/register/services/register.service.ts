import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../shared/models/user.model';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  /**
   * Yeni bir kullanıcı oluştur
   * @param email
   * E-posta
   * @param password
   * Şifre
   * @param displayName
   * Kullanıcı adı
   * @param picture
   * Avatar URL
   */
  createUser(
    email: string,
    password: string,
    displayName: string,
    picture: string
  ): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users`, {
      email,
      password,
      displayName,
      picture,
    });
  }
}
