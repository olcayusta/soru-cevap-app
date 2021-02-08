import { Injectable } from '@angular/core';
import { UserService } from '@shared/services/user.service';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { User } from '@shared/models/user.model';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserListResolverService implements Resolve<User[]> {
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<User[]> | Promise<User[]> | User[] {
    return this.userService.getAllUsers().pipe(
      catchError((err) => {
        return EMPTY;
      })
    );
  }
}
