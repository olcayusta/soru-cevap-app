import {Component, ChangeDetectionStrategy, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'qa-search-icon',
  templateUrl: 'search-24px.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchIconComponent {

  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }

}
