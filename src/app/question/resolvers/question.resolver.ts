import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
  NavigationError,
} from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { QuestionService } from '../services/question.service';
import { Question } from '@shared/models/question.model';
import { catchError } from 'rxjs/operators';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class QuestionResolver implements Resolve<Question> {
  constructor(
    private questionService: QuestionService,
    private router: Router,
    private location: Location
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Question> {
    const questionId = Number(route.paramMap.get('questionId'));
    return this.questionService.getQuestion(questionId).pipe(
      catchError((err: NavigationError) => {
        this.router.navigate(['/404'], { replaceUrl: true }).then(() => {
          this.location.replaceState(state.url);
        });
        return EMPTY;
      })
    );
  }
}
