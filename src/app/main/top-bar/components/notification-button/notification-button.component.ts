import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ɵmarkDirty as markDirty,
  Type,
} from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NotificationService } from '@shared/services/notification.service';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { NotificationListPopupComponent } from '../notification-list-popup/notification-list-popup.component';

@Component({
  selector: 'app-notification-button',
  templateUrl: './notification-button.component.html',
  styleUrls: ['./notification-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationButtonComponent implements OnInit {
  notificationCount$!: Observable<number>;

  popupOpened = false;
  blockScrollStrategy: ScrollStrategy;

  comp?: Type<NotificationListPopupComponent>;

  constructor(
    private notificationService: NotificationService,
    private sso: ScrollStrategyOptions
  ) {
    this.blockScrollStrategy = this.sso.close();
  }

  ngOnInit(): void {
    this.notificationCount$ = this.notificationService
      .getUnseenCount()
      .pipe(shareReplay());
  }

  async openNotifications(): Promise<void> {
    if (this.popupOpened) {
      this.popupOpened = false;
    } else {
      const { NotificationListPopupComponent: comp } = await import(
        '../notification-list-popup/notification-list-popup.component'
      );
      this.comp = comp;
      markDirty(this);
      this.popupOpened = true;
    }

    /* const { NotificationListPopupComponent } = await import(
      '../notification-list-popup/notification-list-popup.component'
    );
    const comp = this.vcr.createComponent(NotificationListPopupComponent, null, this.injector);
    const cfr = this.cfr.resolveComponentFactory(comp);*/
  }

  outsideClick(): void {
    this.popupOpened = false;
    markDirty(this);
  }

  onDetach() {
    this.popupOpened = false;
  }
}
