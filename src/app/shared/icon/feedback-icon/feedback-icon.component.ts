import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'qa-feedback-icon',
  templateUrl: 'feedback-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeedbackIconComponent {

  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }

}
