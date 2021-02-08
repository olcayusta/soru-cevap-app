import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ɵmarkDirty as markDirty
} from '@angular/core';
import { shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { NotificationService } from '@shared/services/notification.service';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';

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

  constructor(
    private notificationService: NotificationService,
    private sso: ScrollStrategyOptions
  ) {
    this.blockScrollStrategy = this.sso.block();
  }

  ngOnInit(): void {
    this.notificationCount$ = this.notificationService.getUnseenCount().pipe(shareReplay());
  }

  async openNotifications(): Promise<void> {
    this.popupOpened = !this.popupOpened;
/*
    import(
      '../notification-list-popup/notification-list-popup.component'
    ).then(value => {
      this.foo = value.NotificationListPopupComponent;
      this.popupOpened = !this.popupOpened;
    })
*/

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
}
