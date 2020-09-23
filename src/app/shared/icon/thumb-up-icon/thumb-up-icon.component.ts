import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-thumb-up-icon',
  templateUrl: 'thumb_up-24px.svg',
  styles: [`:host {
    display: inline-flex;
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThumbUpIconComponent {

}
