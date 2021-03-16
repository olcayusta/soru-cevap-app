import {
  Component,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  NgModule,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from '../../dialogs/settings-dialog/settings-dialog.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavDrawerComponent implements OnInit {
  @Output() closeDrawer = new EventEmitter<boolean>();

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  openSettingsDialog() {
    this.closeDrawer.emit(true);
    this.dialog.open(SettingsDialogComponent, {
      minWidth: 900,
      autoFocus: false,
    });
  }

  onClicked() {
    this.closeDrawer.emit();
  }
}

@NgModule({
  declarations: [NavDrawerComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatDividerModule,
    MatIconModule,
  ],
})
export class NavDrawerModule {}
