import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-favorite-icon',
  templateUrl: 'favorite_border-24px.svg',
  styles: [`:host {
    display: inline-flex;
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FavoriteIconComponent {
}
