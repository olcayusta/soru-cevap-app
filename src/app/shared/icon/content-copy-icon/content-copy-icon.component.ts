import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-content-copy-icon',
  templateUrl: 'content_copy-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentCopyIconComponent {
}
