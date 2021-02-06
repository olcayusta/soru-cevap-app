import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from '@shared/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { environment } from '@environments/environment';

interface ResolveData {
  user: User;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  user!: User;

  links = [
    {
      path: '/',
      label: 'ANA SAYFA',
    },
    {
      path: '/questions',
      label: 'SORULAR',
    },
    {
      path: '/answers',
      label: 'CEVAPLAR',
    },
    {
      path: '/tags',
      label: 'ETİKETLER',
    },
    {
      path: '/tags',
      label: 'BOOKMARKS',
    },
  ];

  // activeLink = this.links[0];

  constructor(private route: ActivatedRoute, private title: Title) {}

  ngOnInit(): void {
    const { user } = <ResolveData>this.route.snapshot.data;
    this.user = user;
    this.title.setTitle(`${user.displayName} - ${environment.appTitle}`);
  }
}
