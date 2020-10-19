import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { User } from '../../shared/models/user.model';
import { EMPTY, Observable } from 'rxjs';
import { UserService } from '../../shared/services/user.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<User> {
  constructor(private userService: UserService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<User> | Promise<User> | User {
    return this.userService.getUser(+route.paramMap.get('userId')).pipe(
      catchError((err) => {
        this.router.navigate(['/404'], { replaceUrl: true });
        return EMPTY;
      })
    );
  }
}
