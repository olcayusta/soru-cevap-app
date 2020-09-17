import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'id-fish-icon',
  templateUrl: 'fish-icon.svg',
  styles: [`
    :host {
      display: inline-flex;
    }
    svg {
      width: 32px;
      height: 32px;
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FishIconComponent {
  constructor(private cd: ChangeDetectorRef) {
    cd.detach();
  }
}
