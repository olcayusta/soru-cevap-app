import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  ViewChildren,
  QueryList,
  AfterViewInit,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import {MatMenu, MatMenuItem} from '@angular/material/menu';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortByComponent implements OnInit, AfterViewInit {
  @ViewChild('menu') menu: MatMenu;
  @ViewChildren('menuItem') menuItemList: QueryList<MatMenuItem>;

  menuItems;

/*
  items = [
    {sort: '', label: 'Trendler'},
    {sort: 'popularity', label: 'En popüler'},
    {sort: 'date', label: 'Eklenme tarihi'},
    {sort: 'activity', label: 'Son aktivite tarihi'},
  ];
*/

/*  items = [
    {sort: '', label: 'Item 1'},
    {sort: 'popularity', label: 'Item 2'},
    {sort: 'date', label: 'Item 3'},
    {sort: 'activity', label: 'Item 4'},
  ];*/

  items = [
    {sort: '', label: 'Newest'},
    {sort: 'popularity', label: 'Recent activity'},
    {sort: 'date', label: 'Most votes'},
    {sort: 'date', label: 'Most frequent'},
    {sort: 'activity', label: 'Bounty ending soon'},
  ];

  selectedIndex = 0;

  constructor(
    private route: ActivatedRoute,
    public cdr: ChangeDetectorRef
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

  async onItemClick(menuItem: MatMenuItem, index: number): Promise<void> {
    // remove highlight
    this.menuItems[this.selectedIndex]._highlighted = false;

    // change selected index
    this.selectedIndex = index;

    // add highlight
    menuItem._highlighted = true;
  }

}
