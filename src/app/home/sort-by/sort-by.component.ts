import {Component, ChangeDetectionStrategy, ViewChild, ViewChildren, QueryList, AfterViewInit, OnInit} from '@angular/core';
import {MatMenu, MatMenuItem} from '@angular/material/menu';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'id-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortByComponent implements OnInit, AfterViewInit {
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
    private route: ActivatedRoute,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const sort = this.route.snapshot.queryParamMap.get('sort');
    if (sort) {
      this.selectedIndex = this.items.findIndex(value => value.sort === sort);
    }
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
