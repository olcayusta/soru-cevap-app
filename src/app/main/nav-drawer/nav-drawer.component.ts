import {Component, EventEmitter, OnInit, ChangeDetectionStrategy, Output, NgModule} from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '@shared/models/user.model';

@Component({
  selector: 'id-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavDrawerComponent implements OnInit {
  // @Output() closeDrawer = new EventEmitter();

  user: User;

  constructor(
    private authService: AuthService
  ) {
  }

  ngOnInit(): void {
    this.user = this.authService.userValue;
  }

  logout(): void {
    this.authService.logout();
  }
}

