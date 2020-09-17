import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-question-answer-icon',
  templateUrl: 'question_answer-24px.svg',
  styles: [`
    :host {
      display: inline-flex
    }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionAnswerIconComponent {
}
