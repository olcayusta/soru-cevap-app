import {Component, OnInit, ChangeDetectionStrategy, ɵmarkDirty as markDirty} from '@angular/core';
import {QuestionService} from '@shared/services/question.service';
import {Question} from '@shared/models/question.model';
import {ActivatedRoute} from '@angular/router';
import {FilterService} from '@shared/services/filter.service';
import {Observable} from 'rxjs';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'id-recent-questions',
  templateUrl: './recent-questions.component.html',
  styleUrls: ['./recent-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentQuestionsComponent implements OnInit {
  questions: Question[];
  questions$: Observable<Question[]>;

  offset = 0;

  constructor(
    private questionService: QuestionService,
    private filterService: FilterService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.queryParamMap.pipe(
      switchMap(value => this.filterService.getQuestionsByFiltered(value.get('sort'))),
    ).subscribe(value => {
      this.questions = value;
      markDirty(this);
    });
  }

  loadMore(): void {
    setTimeout(() => {
      this.questionService.getMoreQuestions(this.offset).subscribe(value => {
        if (value) {
          this.offset += 6;
          this.questions = [...this.questions, ...value];
          markDirty(this);
        }
      });
    }, 500);
  }
}
