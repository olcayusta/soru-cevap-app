import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-more-vert-icon',
  templateUrl: 'more_vert-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MoreVertIconComponent {
}
