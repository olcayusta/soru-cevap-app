import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Tag } from '../../shared/models/tag.model';
import { EMPTY, Observable } from 'rxjs';
import { TagService } from '../../shared/services/tag.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TagResolverService implements Resolve<Tag> {
  constructor(private tagService: TagService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tag> | Promise<Tag> | Tag {
    return this.tagService.getTag(route.paramMap.get('tagId')).pipe(
      catchError((err) => {
        return EMPTY;
      })
    );
  }
}
