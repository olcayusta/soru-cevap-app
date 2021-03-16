import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  Type,
  ɵmarkDirty as markDirty,
} from '@angular/core';
import { ScrollStrategy, ScrollStrategyOptions } from '@angular/cdk/overlay';
import { User } from '@shared/models/user.model';
import { AuthService } from '../../../../auth/auth.service';
import { IronDropdownComponent } from '../../../../experimental/iron-dropdown/iron-dropdown.component';

@Component({
  selector: 'app-avatar-button',
  templateUrl: './avatar-button.component.html',
  styleUrls: ['./avatar-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarButtonComponent implements OnInit {
  user!: User;

  blockScrollStrategy: ScrollStrategy;
  popupOpened = false;

  loaded = false;

  // compRef?: Type<any>;

  ironDropdownOutlet?: Type<IronDropdownComponent>;

  constructor(
    private sso: ScrollStrategyOptions,
    private authService: AuthService
  ) {
    this.blockScrollStrategy = this.sso.block();
  }

  ngOnInit(): void {
    this.user = this.authService.userValue;
  }

  async openUserProfilePopup(): Promise<void> {
    if (this.popupOpened) {
      this.popupOpened = false;
    } else {
      await this.loadIronDropdownComponent();
      this.popupOpened = true;
    }
  }

  async loadIronDropdownComponent(): Promise<void> {
    const { IronDropdownComponent: comp } = await import(
      '../../../../experimental/iron-dropdown/iron-dropdown.component'
    );

    this.ironDropdownOutlet = comp;
    markDirty(this);
  }

  outsideClick(): void {
    this.popupOpened = false;
  }

  onDetach() {
    this.popupOpened = false;
  }
}
