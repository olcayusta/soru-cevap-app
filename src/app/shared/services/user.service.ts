import {Injectable, OnDestroy} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';
import { Answer } from '@shared/models/answer.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  /**
   * REST API uzerinden ilgili kullanicinin, tum bilgilerini getirir.
   * @param userId
   */
  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${userId}`);
  }

  getUserQuestions(userId: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${environment.apiUrl}/users/${userId}/questions`);
  }

  /**
   * REST API uzerinden ilgili kullanicinin, sorulara vermis oldugu cevaplari getirir.
   * @param userId
   * The parameter Id
   */
  getUserAnswers(userId: number): Observable<Answer[]> {
    return this.http.get<Answer[]>(`${environment.apiUrl}/users/${userId}/answers`);
  }

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
