import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../../../auth/auth.service';
import { User } from '@shared/models/user.model';
import { SocketService } from '@shared/services/socket.service';

@Component({
  selector: 'app-user-menu-popup',
  templateUrl: './user-menu-popup.component.html',
  styleUrls: ['./user-menu-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserMenuPopupComponent implements OnInit {
  user!: User;

  constructor(private authService: AuthService, private socketService: SocketService) {}

  ngOnInit(): void {
    this.user = this.authService.userValue;
  }

  logout(): void {
    this.authService.logout();
    this.socketService.disconnect();
  }
}
