import { Component, OnInit, ChangeDetectionStrategy, ɵmarkDirty as markDirty } from '@angular/core';
import { QuestionService } from '@shared/services/question.service';
import { Question } from '@shared/models/question.model';

@Component({
  selector: 'qa-recent-questions',
  templateUrl: './recent-questions.component.html',
  styleUrls: ['./recent-questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecentQuestionsComponent implements OnInit {
  questions: Question[];

  offset = 0;

  constructor(
    private questionService: QuestionService
  ) {
  }

  ngOnInit(): void {
    this.questionService.getAllQuestions().subscribe(value => {
      this.questions = value;
      markDirty(this);
    });
  }

  loadMore(): void {
    console.log('load more is detect!');
    this.questionService.getMoreQuestions(this.offset).subscribe(value => {
      if (value) {
        this.offset += 6;
        this.questions = [...this.questions, ...value];
        markDirty(this);
      }
    });
  }
}
