import { Component, OnInit, ChangeDetectionStrategy, ɵdetectChanges as detectChanges } from '@angular/core';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { User } from '@shared/models/user.model';
import { AuthService } from '../../../auth/auth.service';

@Component({
  selector: 'app-avatar-button',
  templateUrl: './avatar-button.component.html',
  styleUrls: ['./avatar-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AvatarButtonComponent implements OnInit {
  user: User;

  blockScrollStrategy: ScrollStrategy;
  popupOpened = false;

  constructor(private sso: ScrollStrategyOptions, private authService: AuthService) {
    this.blockScrollStrategy = this.sso.block();
  }

  ngOnInit(): void {
    this.user = this.authService.userValue;
  }

  openUsermenu(): void {
    this.popupOpened = !this.popupOpened;
  }

  outsideClick(): void {
    this.popupOpened = false;
    detectChanges(this);
  }
}
