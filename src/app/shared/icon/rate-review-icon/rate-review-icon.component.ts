import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'qa-rate-review-icon',
  templateUrl: 'rate_review-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RateReviewIconComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
