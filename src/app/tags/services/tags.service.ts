import {Injectable, OnDestroy} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../../shared/models/tag.model';
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: "any"
})
export class TagsService implements OnDestroy {
  API_URL = `${environment.apiUrl}/tags`;

  constructor(private http: HttpClient) {
    console.log('tags.service.ts init!');
  }

  ngOnDestroy(): void {
    console.log('tags.service.ts destroy!');
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.API_URL);
  }
}
