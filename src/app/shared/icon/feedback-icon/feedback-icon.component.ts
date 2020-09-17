import {Component, ChangeDetectionStrategy, } from '@angular/core';

@Component({
  selector: 'id-feedback-icon',
  templateUrl: 'feedback-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackIconComponent {

}
