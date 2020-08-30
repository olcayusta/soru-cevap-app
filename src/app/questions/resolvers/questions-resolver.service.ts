import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Question } from '../../shared/models/question.model';
import { Observable } from 'rxjs';
import { QuestionService } from '../../shared/services/question.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionsResolverService implements Resolve<Question[]> {

  constructor(
    private questionService: QuestionService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Question[]> | Promise<Question[]> | Question[] {
    return this.questionService.getAllQuestions();
  }
}
