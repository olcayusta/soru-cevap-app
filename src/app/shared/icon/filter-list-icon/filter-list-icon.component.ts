import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-filter-list-icon',
  templateUrl: 'filter_list-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterListIconComponent {
}
