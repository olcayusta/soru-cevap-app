import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  NgModule,
} from '@angular/core';
import { User } from '@shared/models/user.model';
import { AuthService } from '../../auth/auth.service';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SocketService } from '@shared/services/socket.service';

@Component({
  selector: 'app-iron-dropdown',
  templateUrl: './iron-dropdown.component.html',
  styleUrls: ['./iron-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IronDropdownComponent implements OnInit {
  user!: User;

  constructor(
    private authService: AuthService,
    private socketService: SocketService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.userValue;
  }

  logout(): void {
    this.authService.logout();
    this.socketService.disconnect();
  }
}

@NgModule({
  declarations: [IronDropdownComponent],
  imports: [MatListModule, MatIconModule, RouterModule],
})
export class IronDropdownModule {}
