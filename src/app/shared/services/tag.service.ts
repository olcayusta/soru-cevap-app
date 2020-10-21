import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Tag } from '../models/tag.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  apiUrl = `${environment.apiUrl}/tags`;

  constructor(private http: HttpClient) {}

  getFavoriteTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${environment.apiUrl}/watched-tags`);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.apiUrl);
  }

  getTag(tagId: number): Observable<Tag> {
    return this.http.get<Tag>(`${environment.apiUrl}/tags/${tagId}`);
  }

  searchTag(searchTerm: string): Observable<Tag[]> {
    return this.http.get<Tag[]>(`${this.apiUrl}/search/${searchTerm}`);
  }
}
