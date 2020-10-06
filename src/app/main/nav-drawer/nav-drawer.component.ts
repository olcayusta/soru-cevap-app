import { Component, EventEmitter, OnInit, ChangeDetectionStrategy, Output, NgModule } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { User } from '@shared/models/user.model';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from '../../settings-dialog/settings-dialog.component';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavDrawerComponent implements OnInit {
  @Output() closeDrawer = new EventEmitter();

  user: User;

  constructor(
    private authService: AuthService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.user = this.authService.userValue;
  }

  logout(): void {
    this.authService.logout();
  }

  openSettingsDialog() {
    this.closeDrawer.emit();
    this.dialog.open(SettingsDialogComponent, {
      minWidth: 900,
      autoFocus: false
    });
  }
}

