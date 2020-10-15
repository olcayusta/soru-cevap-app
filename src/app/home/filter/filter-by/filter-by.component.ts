import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatMenu, MatMenuItem } from '@angular/material/menu';

@Component({
  selector: 'app-filter-by',
  templateUrl: './filter-by.component.html',
  styleUrls: ['./filter-by.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterByComponent implements OnInit {
  @ViewChild('filterMenu') filterMenu: MatMenu;

  items = [
    {
      sort: 'a',
      label: 'No answers',
      checked: true
    },
    {
      sort: 'b',
      label: 'No accepted answer',
      checked: true
    },
    {
      sort: 'c',
      label: 'Has bounty',
      checked: false
    }
  ];

  selectedItemIndex = 0;

  constructor(public cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  onLanguageMenuItemClicked(menuItem: MatMenuItem, index: number): void {
    this.filterMenu._allItems.toArray().forEach((value) => {
      value._highlighted = false;
    });
    menuItem._highlighted = true;
  }

  checkboxClicked($event: MouseEvent, index: number) {
    $event.stopPropagation();
    this.selectedItemIndex = index;
  }
}
