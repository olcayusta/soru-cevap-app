import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Question } from '../../models/question.model';

@Component({
  selector: 'qa-home-question-list-item',
  templateUrl: './home-question-list-item.component.html',
  styleUrls: ['./home-question-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeQuestionListItemComponent implements OnInit {
  @Input() question: Question;

  constructor() { }

  ngOnInit(): void {
  }

}
