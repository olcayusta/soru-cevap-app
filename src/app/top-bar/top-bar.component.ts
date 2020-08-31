import {
  Component,
  EventEmitter,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  ɵmarkDirty as markDirty,
  Type,
  AfterViewInit
} from '@angular/core';
import { User } from '../shared/models/user.model';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { StateService } from '../shared/services/state.service';
import {ScrollStrategy, ScrollStrategyOptions} from '@angular/cdk/overlay';
import {NotificationListPopupComponent} from '../notification-list-popup/notification-list-popup.component';
import {UserMenuPopupComponent} from '../user-menu-popup/user-menu-popup.component';
import {SearchFormComponent} from '../search-form/search-form.component';
import {NotificationService} from '../shared/services/notification.service';

@Component({
  selector: 'qa-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent implements OnInit, AfterViewInit {
  @Output() openDrawer = new EventEmitter();
  @Output() openSheet = new EventEmitter();

  isLoggedIn$: Observable<boolean>;
  user: User;

  popupOpened = false;
  popup: 'avatar' | 'notification';

  blockScrollStrategy: ScrollStrategy;

  topbarOpened;
  compOutlet: Type<NotificationListPopupComponent>;
  compOutlet2: Type<UserMenuPopupComponent>;
  searchFormComponent: Type<SearchFormComponent>;

  notificationCount;

  constructor(
    private authService: AuthService,
    private stateService: StateService,
    private sso: ScrollStrategyOptions,
    private notificationService: NotificationService

  ) {
    this.blockScrollStrategy = this.sso.block();
  }

  async ngAfterViewInit(): Promise<void> {
    const {SearchFormComponent: comp} = await import('../search-form/search-form.component');
    this.searchFormComponent = comp;
    markDirty(this);
  }

  async ngOnInit(): Promise<void> {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.user = this.authService.userValue;

    this.notificationCount = this.notificationService.getUnseenCount();

    this.stateService.topbarDisplay.subscribe(value => {
      this.topbarOpened = value;
      // console.log(this.topbarOpened);
      markDirty(this);
    });
  }

  outsideClick(): void {
    this.popupOpened = false;
    markDirty(this);
  }

  async openNotifications(): Promise<void> {
    const {NotificationListPopupComponent: comp} = await import('../notification-list-popup/notification-list-popup.component')
    this.compOutlet = comp;
    this.popupOpened = !this.popupOpened;
    this.popup = 'notification';
    markDirty(this);
  }

  async openUsermenu(): Promise<void> {
    const {UserMenuPopupComponent: comp} = await import('../user-menu-popup/user-menu-popup.component')
    this.compOutlet2 = comp;
    this.popupOpened = !this.popupOpened;
    this.popup = 'avatar';
    markDirty(this);
  }
}
