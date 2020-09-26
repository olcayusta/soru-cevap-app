import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '@environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '@shared/models/user.model';
import { tap } from 'rxjs/operators';

interface Account {
  email: string;
  displayName: string;
  picture: string;
}

interface ILogin {
  user: User;
  token: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();

  userSubject = new BehaviorSubject<User>(null);
  user$ = this.userSubject.asObservable();

  // store the URL so we can redirect after logging in
  redirectUrl = '/';

  constructor(
    private http: HttpClient
  ) {
    const loggedIn = !!JSON.parse(localStorage.getItem('user'));
    this.isLoggedInSubject.next(loggedIn);
    this.userSubject.next(JSON.parse(localStorage.getItem('user')));
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  login(email: string, password: string): Observable<ILogin> {
    return this.http.post<any>(`${environment.apiUrl}/users/login`, {
      email, password
    }).pipe(tap((result: ILogin) => {
      const {user, token} = result;

      if (token) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', token);
        this.isLoggedInSubject.next(true);
        this.userSubject.next(user);
      }
    }));
  }

  // Exit to app
  logout(): void {
    localStorage.clear();
    this.isLoggedInSubject.next(null);
  }
}
