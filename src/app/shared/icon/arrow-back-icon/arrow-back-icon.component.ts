import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-arrow-back-icon',
  templateUrl: 'arrow_back-24px.svg',
  styles: [`:host {
    display: inline-flex;
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArrowBackIconComponent {
}
