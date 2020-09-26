import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { MatMenu, MatMenuItem } from '@angular/material/menu';
import { FilterService } from '../../shared/services/filter.service';
import { ActivatedRoute, Router } from '@angular/router';

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
    {sort: 'date', label: 'Eklenme tarihi (en yeni)'},
    {sort: 'activity', label: 'Son etkinlik (en yeni)'},
  ];

  languageItems = [
    {sort: '', label: 'No answers'},
    {sort: 'popularity', label: 'No accepted answer'},
    {sort: 'date', label: 'Has bounty'}
  ];

  selectedIndex = 0;

  constructor(
    private filterService: FilterService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const sort = this.route.snapshot.queryParamMap.get('sort');
    if (sort) {
      this.selectedIndex = this.items.findIndex(value => value.sort === sort);
    }
  }

  ngAfterViewInit(): void {
    // this.menuItemList.toArray()[this.selectedIndex]._highlighted = true;
    // this.languageMenu._allItems.toArray()[0]._highlighted = true;
  }



  onLanguageMenuItemClicked(menuItem: MatMenuItem, index: number): void {
    this.languageMenu._allItems.toArray().forEach(value => {
      value._highlighted = false;
    });
    menuItem._highlighted = true;
  }

  onClicked($event: MouseEvent) {
    $event.stopPropagation();
  }
}
