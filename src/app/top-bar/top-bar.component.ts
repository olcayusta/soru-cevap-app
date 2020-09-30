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
import { User } from '@shared/models/user.model';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { StateService } from '@shared/services/state.service';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { UserMenuPopupComponent } from '../user-menu-popup/user-menu-popup.component';
import { NotificationService } from '@shared/services/notification.service';
import { shareReplay } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { SpinnerService } from '@shared/services/spinner.service';

@Component({
  selector: 'app-top-bar',
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

  notificationCount;

  showPopup = false;

  isHandset: boolean;

  spinner$: Observable<boolean>;

  constructor(
    private authService: AuthService,
    private stateService: StateService,
    private sso: ScrollStrategyOptions,
    private notificationService: NotificationService,
    private breakpointObserver: BreakpointObserver,
    private spinnerService: SpinnerService
  ) {
    this.blockScrollStrategy = this.sso.block();
  }

  ngAfterViewInit(): void {
  }

  async ngOnInit(): Promise<void> {
    this.spinner$ = this.spinnerService.subject$;
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((value: BreakpointState) => {
      this.isHandset = value.matches;

      // Mobile phone
      if (value.matches) {
        this.stateService.subject.subscribe(state => {
          this.topbarOpened = state;
          console.log(state);
          markDirty(this);
        });
      }

      markDirty(this);
    });
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.user = this.authService.userValue;

    this.getNotificationCount();
  }

  getNotificationCount(): void {
    this.notificationCount = this.notificationService.getUnseenCount().pipe(shareReplay());
  }

  outsideClick(): void {
    this.popupOpened = false;
    markDirty(this);
  }

  openUsermenu(): void {
    this.popupOpened = !this.popupOpened;
    this.popup = 'avatar';
    markDirty(this);
  }
}
