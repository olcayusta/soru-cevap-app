import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { User } from '@shared/models/user.model';

@Component({
  selector: 'id-user-list-item',
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListItemComponent implements OnInit {
  @Input() user: User;

  constructor() {
  }

  ngOnInit(): void {
  }

}
