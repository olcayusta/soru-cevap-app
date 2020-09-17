import { Component, OnInit, ChangeDetectionStrategy, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { MatMenu, MatMenuItem } from '@angular/material/menu';
import { FilterService } from '@shared/services/filter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'id-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit, AfterViewInit {
  @ViewChild('menu') menu: MatMenu;
  @ViewChildren('menuItem') menuItemList: QueryList<MatMenuItem>;

  @ViewChild('languageMenu') languageMenu: MatMenu;

  items = [
    {sort: '', label: 'Trendler'},
    {sort: 'popularity', label: 'En popüler'},
    {sort: 'date', label: 'En yeni'},
    {sort: 'alpha', label: 'Name'},
    {sort: 'alpha', label: 'Recent activity'},
  ];

  languageItems = [
    {sort: '', label: 'No answers'},
    {sort: 'popularity', label: 'No accepted answer'},
    {sort: 'date', label: 'Has bounty'}
  ];

  selectedIndex = 0;

  constructor(
    private filterService: FilterService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.menuItemList.toArray()[this.selectedIndex]._highlighted = true;
    // this.languageMenu._allItems.toArray()[0]._highlighted = true;
  }

  onItemClick(menuItem: MatMenuItem, index: number): void {
    this.menuItemList.toArray()[this.selectedIndex]._highlighted = false;
    this.selectedIndex = index;
    menuItem._highlighted = true;

    this.router.navigate(['/'], {
      queryParams: {
        sort: this.items[this.selectedIndex].sort
      }
    });
  }

  onLanguageMenuItemClicked(menuItem: MatMenuItem, index: number): void {
    this.languageMenu._allItems.toArray().forEach(value => {
      value._highlighted = false;
    });
    menuItem._highlighted = true;
  }
}
