import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-rate-review-icon',
  templateUrl: 'rate_review-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RateReviewIconComponent {
}
