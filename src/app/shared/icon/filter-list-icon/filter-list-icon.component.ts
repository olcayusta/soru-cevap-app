import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'qa-filter-list-icon',
  templateUrl: 'filter_list-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterListIconComponent {

  constructor() {
  }

}
