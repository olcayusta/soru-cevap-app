import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${environment.apiUrl}/users/${userId}`);
  }

  getUserQuestions(userId: number): Observable<Question[]> {
    return this.http.get<Question[]>(`${environment.apiUrl}/users/${userId}/questions`);
  }

  /**
   * Yeni bir kullanıcı oluştur
   * @param email
   * @param password
   * @param displayName
   * @param picture
   */
  createUser(email: string, password: string, displayName: string, picture: string): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/users`, {
      email, password, displayName, picture
    });
  }
}
