import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
} from '@angular/core';
import { MatMenu, MatMenuItem } from '@angular/material/menu';

@Component({
  selector: 'app-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterByComponent implements OnInit {
  @ViewChild('languageMenu') languageMenu: MatMenu;

  items = [
    {
      sort: 'a',
      label: 'No answers',
      checked: true,
    },
    {
      sort: 'b',
      label: 'No accepted answer',
      checked: true,
    },
    {
      sort: 'c',
      label: 'Has bounty',
      checked: false,
    },
  ];

  selectedItemIndex = 0;

  constructor() {}

  ngOnInit(): void {}

  onLanguageMenuItemClicked(menuItem: MatMenuItem, index: number): void {
    this.languageMenu._allItems.toArray().forEach((value) => {
      value._highlighted = false;
    });
    menuItem._highlighted = true;
  }

  checkboxClicked($event: MouseEvent, index: number) {
    $event.stopPropagation();
    this.selectedItemIndex = index;
  }
}
