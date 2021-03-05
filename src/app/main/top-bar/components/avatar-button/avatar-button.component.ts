import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  OnInit,
  Type,
  ViewContainerRef,
  ɵdetectChanges as detectChanges,
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

  compRef?: Type<any>;

  ironDropdownOutlet?: Type<IronDropdownComponent>;

  constructor(
    private sso: ScrollStrategyOptions,
    private authService: AuthService,
    private cfr: ComponentFactoryResolver,
    private vcr: ViewContainerRef,
    private cdr: ChangeDetectorRef
  ) {
    this.blockScrollStrategy = this.sso.block();
  }

  ngOnInit(): void {
    this.user = this.authService.userValue;
  }

  async openUserProfilePopup(): Promise<void> {
    await this.loadIronDropdownComponent();
    this.popupOpened = !this.popupOpened;
    markDirty(this);

    /*    import(
      '../../../../experimental/iron-dropdown/iron-dropdown.component'
    ).then((value) => {
      const comp = value.IronDropdownComponent;
      const factory = this.cfr.resolveComponentFactory(comp);
      const vcr = this.vcr.createComponent(factory);
      // @ts-ignore
      this.compRef = vcr;
      this.cdr.detectChanges();
    });*/
  }

  async loadIronDropdownComponent(): Promise<void> {
    const { IronDropdownComponent: comp } = await import(
      '../../../../experimental/iron-dropdown/iron-dropdown.component'
    );

    this.ironDropdownOutlet = comp;
  }

  outsideClick(): void {
    this.popupOpened = false;
    detectChanges(this);
  }
}
