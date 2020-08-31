import {Component, OnInit, ChangeDetectionStrategy, NgModule} from '@angular/core';
import { NotificationService } from '../shared/services/notification.service';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'qa-notification-list-popup',
  templateUrl: './notification-list-popup.component.html',
  styleUrls: ['./notification-list-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotificationListPopupComponent implements OnInit {

  constructor(
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }

}

@NgModule({
  declarations: [NotificationListPopupComponent],
  imports: [
    MatCardModule,
    MatListModule
  ]
})
class NotificationListPopupModule {}
