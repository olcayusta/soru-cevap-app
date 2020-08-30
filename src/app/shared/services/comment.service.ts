import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '../models/comment.model';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient
  ) { }

  saveComment(content: string): Observable<Comment> {
    return this.http.post<Comment>(`${environment.apiUrl}/comments`, {
      content
    });
  }
}
