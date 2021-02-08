import { Component, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { NotificationService } from '@shared/services/notification.service';
import { Notification } from '@shared/models/notification.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notification-list-popup',
  templateUrl: './notification-list-popup.component.html',
  styleUrls: ['./notification-list-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationListPopupComponent implements OnInit {
  notifications$!: Observable<Notification[]>;

  hero = {
    firstName: 'Dana',
    lastName: 'Scully',
    age: 24,
    no: 10,
    test: 1000,
  };

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.notifications$ = this.notificationService.getNotifications();
  }
}
/*

@NgModule({
  imports: [MatListModule, CommonModule, SharedModule],
  declarations: [NotificationListPopupComponent],
  exports: [NotificationListPopupComponent],
})
class NotificationListModule {}
*/
