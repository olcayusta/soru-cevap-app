import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';
import {Answer} from '../../shared/models/answer.model';

@Component({
  selector: 'id-question-answer-item',
  templateUrl: './question-answer-item.component.html',
  styleUrls: ['./question-answer-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionAnswerItemComponent implements OnInit {
  @Input() answer: Answer;

  constructor() {
  }

  ngOnInit(): void {
  }

}
