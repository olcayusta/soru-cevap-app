import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'qa-menu-icon',
  templateUrl: 'menu-24px.svg',
  styleUrls: ['./menu-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
