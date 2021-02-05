import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../shared/models/user.model';
import { ActivatedRoute } from '@angular/router';

interface ResolveData {
  users: User[];
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  users!: User[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const { users } = this.route.snapshot.data as ResolveData;
    this.users = users;
  }
}
