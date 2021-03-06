import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { User } from '@shared/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  users!: User[];

  constructor(private route: ActivatedRoute, private titleService: Title) {}

  ngOnInit(): void {
    const { users } = this.route.snapshot.data as { users: User[] };
    this.users = users;
    this.titleService.setTitle(`Kullanıcılar - ${environment.appTitle}`);
  }
}
