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

@Component({
  selector: 'app-iron-dropdown',
  templateUrl: './iron-dropdown.component.html',
  styleUrls: ['./iron-dropdown.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IronDropdownComponent implements OnInit {
  user!: User;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.user = this.authService.userValue;
  }

  logout() {}
}

@NgModule({
  declarations: [IronDropdownComponent],
  imports: [MatListModule, MatIconModule, RouterModule],
})
export class IronDropdownModule {}
