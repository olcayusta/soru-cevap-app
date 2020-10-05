import {Injectable} from '@angular/core';
import {TagService} from '../../shared/services/tag.service';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Tag} from '../../shared/models/tag.model';
import {EMPTY, Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagListResolverService implements Resolve<Tag[]> {

  constructor(
    private tagService: TagService
  ) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tag[]> | Promise<Tag[]> | Tag[] {
    return this.tagService.getAllTags().pipe(
      catchError((err, caught) => {
        return EMPTY;
      })
    );
  }
}
