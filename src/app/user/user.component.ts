import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from '../shared/models/user.model';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { environment } from '../../environments/environment';

@Component({
  selector: 'qa-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  user: User;

  links = [
    {
      path: '/',
      label: 'ANA SAYFA'
    },
    {
      path: '/questions',
      label: 'SORULAR'
    },
    {
      path: '/answers',
      label: 'CEVAPLAR'
    }
  ];
  // activeLink = this.links[0];

  constructor(
    private route: ActivatedRoute,
    private title: Title
  ) {
  }

  ngOnInit(): void {
    this.user = this.route.snapshot.data.user;
    this.title.setTitle(`${this.user.displayName} - ${environment.appTitle}`)
  }

}
