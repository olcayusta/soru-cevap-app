import { Component, EventEmitter, OnInit, ChangeDetectionStrategy, Output, ɵmarkDirty as markDirty } from '@angular/core';
import { User } from '../shared/models/user.model';
import { AuthService } from '../auth/auth.service';
import { Observable } from 'rxjs';
import { StateService } from '../shared/services/state.service';

@Component({
  selector: 'qa-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarComponent implements OnInit {
  @Output() openDrawer = new EventEmitter();
  @Output() openSheet = new EventEmitter();

  isLoggedIn$: Observable<boolean>;
  user: User;

  popupOpened = false;
  popup: 'avatar' | 'notification';

  topbarOpened;

  constructor(
    private authService: AuthService,
    private stateService: StateService
  ) {
  }

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
    this.user = this.authService.userValue;

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
}
