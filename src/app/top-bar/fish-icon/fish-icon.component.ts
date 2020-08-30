import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'qa-fish-icon',
  templateUrl: 'fish-icon.svg',
  styles: [`:host {
    display: inline-flex
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FishIconComponent {
  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }
}
