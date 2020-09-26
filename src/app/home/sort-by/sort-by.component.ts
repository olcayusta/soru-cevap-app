import {Component, ChangeDetectionStrategy, ViewChild, ViewChildren, QueryList, AfterViewInit} from '@angular/core';
import {MatMenu, MatMenuItem} from '@angular/material/menu';
import {Router} from '@angular/router';

@Component({
  selector: 'id-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortByComponent implements AfterViewInit {
  @ViewChild('menu') menu: MatMenu;
  @ViewChildren('menuItem') menuItemList: QueryList<MatMenuItem>;

  menuItems;

  items = [
    {sort: '', label: 'Trendler'},
    {sort: 'popularity', label: 'En popüler'},
    {sort: 'date', label: 'Eklenme tarihi (en yeni)'},
    {sort: 'activity', label: 'Son aktivite tarihi (en yeni)'},
  ];

  selectedIndex = 0;

  constructor(
    private router: Router
  ) {
  }

  ngAfterViewInit(): void {
    this.menuItems = this.menuItemList.toArray();
    this.menuItems[this.selectedIndex]._highlighted = true;
  }

  onItemClick(menuItem: MatMenuItem, index: number): void {
    // remove highlight
    this.menuItems[this.selectedIndex]._highlighted = false;

    // change selected index
    this.selectedIndex = index;

    // add highlight
    menuItem._highlighted = true;

    if (this.items[this.selectedIndex].sort) {
      this.router.navigate(['/'], {
        queryParams: {
          sort: this.items[this.selectedIndex].sort
        }
      });
    } else {
      this.router.navigate(['/']);
    }
  }

}
