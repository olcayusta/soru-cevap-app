import {Component, EventEmitter, OnInit, ChangeDetectionStrategy, Output, NgModule} from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../shared/models/user.model';
import {MatListModule} from '@angular/material/list';
import {CommonModule} from '@angular/common';
import {MatDividerModule} from '@angular/material/divider';
import {RouterModule} from '@angular/router';
import {IconModule} from '../../shared/icon/icon.module';

@Component({
  selector: 'qa-nav-drawer',
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

@NgModule({
  declarations: [
    NavDrawerComponent
  ],
  imports: [
    CommonModule,
    MatListModule,
    IconModule,
    MatDividerModule,
    RouterModule
  ]
})
class NavDrawerModule {}
