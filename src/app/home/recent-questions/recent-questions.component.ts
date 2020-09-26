import {Component, OnInit, ChangeDetectionStrategy, ɵmarkDirty as markDirty} from '@angular/core';
import {QuestionService} from '@shared/services/question.service';
import {Question} from '@shared/models/question.model';
import {ActivatedRoute} from '@angular/router';
import {FilterService} from '@shared/services/filter.service';

@Component({
  selector: 'id-recent-questions',
  templateUrl: './recent-questions.component.html',
  styleUrls: ['./recent-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentQuestionsComponent implements OnInit {
  questions: Question[];

  offset = 0;

  constructor(
    private questionService: QuestionService,
    private filterService: FilterService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(value => {
      const sort = value.get('sort');
      this.filterService.getQuestionsByFiltered(sort).subscribe(value1 => {
        this.questions = value1;
        markDirty(this);
      });
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
    }, 400);
  }
}
