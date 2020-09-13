import {Component, OnInit, ChangeDetectionStrategy, NgModule} from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {User} from '../shared/models/user.model';
import {SocketService} from '../shared/services/socket.service';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {IconModule} from '../shared/icon/icon.module';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'qa-user-menu-popup',
  templateUrl: './user-menu-popup.component.html',
  styleUrls: ['./user-menu-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserMenuPopupComponent implements OnInit {
  user: User;

  constructor(
    private authService: AuthService,
    private socketService: SocketService
  ) {
  }

  ngOnInit(): void {
    this.user = this.authService.userValue;
  }

  logout(): void {
    this.authService.logout();
    this.socketService.disconnect();
  }
}

@NgModule({
  declarations: [UserMenuPopupComponent],
  imports: [
    MatCardModule,
    MatListModule,
    IconModule,
    RouterModule
  ]
})
class UserMenuPopupModule {
}