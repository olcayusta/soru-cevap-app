import { ChangeDetectionStrategy, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Question } from '../../models/question.model';

@Component({
  selector: 'qa-home-question-list-item',
  templateUrl: './home-question-list-item.component.html',
  styleUrls: ['./home-question-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeQuestionListItemComponent implements OnInit {
  @Input() question: Question;

  selectedTagIds: number[];

  constructor() {}

  ngOnInit(): void {
    const tags = JSON.parse(localStorage.getItem('watchedTags'));
    if (tags) {
      this.selectedTagIds = tags.map((value) => {
        return value.id;
      });
      this.question?.tags?.forEach((tag) => {
        this.selectedTagIds.forEach((selectedTagId) => {
          if (tag.id === selectedTagId) tag.selected = true;
        });
      });
    }
  }
}
