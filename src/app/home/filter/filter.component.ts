import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {MatMenu, MatMenuItem} from '@angular/material/menu';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  @ViewChild('languageMenu') languageMenu: MatMenu;

  languageItems = [
    {sort: '', label: 'No answers'},
    {sort: 'popularity', label: 'No accepted answer'},
    {sort: 'date', label: 'Has bounty'}
  ];

  constructor() {
  }

  onLanguageMenuItemClicked(menuItem: MatMenuItem, index: number): void {
    this.languageMenu._allItems.toArray().forEach(value => {
      value._highlighted = false;
    });
    menuItem._highlighted = true;
  }
}
