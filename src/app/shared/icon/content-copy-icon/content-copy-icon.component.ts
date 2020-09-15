import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'qa-content-copy-icon',
  templateUrl: 'content_copy-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentCopyIconComponent {

  constructor() {
  }
}
