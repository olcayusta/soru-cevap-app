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
import { MatMenu, MatMenuItem } from '@angular/material/menu';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortByComponent implements OnInit, AfterViewInit {
  @ViewChild('menu') menu!: MatMenu;
  @ViewChildren('menuItem') menuItemList!: QueryList<MatMenuItem>;

  menuItems!: any;

  items = [
    { sort: '', label: 'En yeni' },
    { sort: 'activity', label: 'Son aktivite tarihi' },
    { sort: 'popularity', label: 'Most votes' },
    { sort: 'date', label: 'Most frequent' },
    { sort: 'activity', label: 'Bounty ending soon' }
  ];

  selectedIndex = 0;

  constructor(private route: ActivatedRoute, public cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    const sort = this.route.snapshot.queryParamMap.get('sort');
    if (sort) {
      this.selectedIndex = this.items.findIndex((value) => value.sort === sort);
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
