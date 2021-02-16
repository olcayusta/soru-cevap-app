import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { TagService } from '../shared/services/tag.service';
import { Tag } from '../shared/models/tag.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TagsResolver implements Resolve<Tag[]> {
  constructor(private tagService: TagService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tag[]> {
    return this.tagService.getAllTags().pipe(
      catchError((err, caught) => {
        return EMPTY;
      })
    );
  }
}
