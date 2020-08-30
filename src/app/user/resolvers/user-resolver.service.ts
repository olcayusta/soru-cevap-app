import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { Observable } from 'rxjs';
import { UserService } from '../../shared/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<User> {

  constructor(
    private userService: UserService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return this.userService.getUser(+route.paramMap.get('userId'));
  }
}
