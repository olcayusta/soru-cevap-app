import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { UserService } from '../shared/services/user.service';
import { User } from '../shared/models/user.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsersResolver implements Resolve<User[]> {
  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User[]> {
    return this.userService.getAllUsers().pipe(
      catchError((err) => {
        return EMPTY;
      })
    );
  }
}
