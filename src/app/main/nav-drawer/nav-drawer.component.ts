import { Component, EventEmitter, OnInit, ChangeDetectionStrategy, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SettingsDialogComponent } from '../../settings-dialog/settings-dialog.component';

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

  /**
   *  Butona tiklandiginda nav drawer componentini kapat
   */
  onClicked() {
    this.closeDrawer.emit();
  }
}
