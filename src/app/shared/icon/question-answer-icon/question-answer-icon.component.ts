import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'qa-question-answer-icon',
  templateUrl: 'question_answer-24px.svg',
  styles: [':host {display: inline-flex}'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionAnswerIconComponent {

  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }

}
