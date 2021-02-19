import { Injectable, OnDestroy } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { Tag } from '../../shared/models/tag.model';
import { catchError } from 'rxjs/operators';
import { TagsService } from '../services/tags.service';

@Injectable({
  providedIn: 'any',
})
export class TagsResolver implements Resolve<Tag[]>, OnDestroy {
  constructor(private tagsService: TagsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Tag[]> {
    return this.tagsService.getAllTags().pipe(
      catchError((err, caught) => {
        return EMPTY;
      })
    );
  }

  ngOnDestroy() {
    console.log('BOOOOMM -- resolve is destroyed - BOOOMMM');
  }
}
