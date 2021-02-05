import { Component, OnInit, ChangeDetectionStrategy, ɵmarkDirty as markDirty, OnDestroy } from '@angular/core';
import { QuestionService } from '@shared/services/question.service';
import { Question } from '@shared/models/question.model';
import { ActivatedRoute } from '@angular/router';
import { FilterService } from '@shared/services/filter.service';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-recent-questions',
  templateUrl: './recent-questions.component.html',
  styleUrls: ['./recent-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentQuestionsComponent implements OnInit, OnDestroy {
  questions!: Question[];
  questions$!: Observable<Question[]>;

  offset = 12;

  subscription!: Subscription;

  constructor(private questionService: QuestionService, private filterService: FilterService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.subscription = this.route.queryParamMap
      .pipe(
        switchMap((value) =>
          this.filterService.getQuestionsByFiltered(value.get('sort') as string, value.get('filter') as string)
        )
      )
      .subscribe((value) => {
        this.questions = value;
        markDirty(this);
      });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  // TODO
  // ilk yukleme yapilirken, ekranda loading belirdigi icin, questions undefined hatasi var
  // fixleniceks
  loadMore(): void {
    setTimeout(() => {
      this.questionService.getMoreQuestions(this.offset).subscribe((value) => {
        if (value.length > 0) {
          this.offset += 6;
          this.questions = [...this.questions, ...value];
          markDirty(this);
        } else {
        }
      });
    }, 400);
  }
}
