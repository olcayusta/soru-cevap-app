import { Component, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NotificationService } from '@shared/services/notification.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { Notification } from '@shared/models/notification.model';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'qa-notification-list-popup',
  templateUrl: './notification-list-popup.component.html',
  styleUrls: ['./notification-list-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationListPopupComponent implements OnInit {
  notifications$: Observable<Notification[]>;

  constructor(
    private notificationService: NotificationService
  ) {
  }

  ngOnInit(): void {
    this.notifications$ = this.notificationService.getNotifications();
  }
}

@NgModule({
  declarations: [
    NotificationListPopupComponent
  ],
  imports: [
    MatCardModule,
    MatListModule,
    CommonModule
  ]
})
class NotificationListPopupModule {
}
