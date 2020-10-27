import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '@shared/models/user.model';

@Component({
  selector: 'app-drawer-header',
  templateUrl: './drawer-header.component.html',
  styleUrls: ['./drawer-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DrawerHeaderComponent implements OnInit {
  @Input() user: User;

  constructor() {}

  ngOnInit(): void {}
}
