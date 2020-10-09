import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import {MatMenu, MatMenuItem} from '@angular/material/menu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent {
  @ViewChild('languageMenu') languageMenu: MatMenu;

  items = [
    {sort: 'a', label: 'No answers'},
    {sort: 'b', label: 'No accepted answer'},
    {sort: 'c', label: 'Has bounty'}
  ];

  constructor(
    private router: Router
  ) {
  }

  onLanguageMenuItemClicked(menuItem: MatMenuItem, index: number): void {
    this.languageMenu._allItems.toArray().forEach(value => {
      value._highlighted = false;
    });
    menuItem._highlighted = true;
  }

  checkboxClicked($event: MouseEvent) {
    $event.stopPropagation();
  }
}
