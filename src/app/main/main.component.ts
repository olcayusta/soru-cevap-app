import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  Type,
  ViewChild,
  Injector,
  ViewContainerRef,
  ComponentFactoryResolver,
  ɵmarkDirty as markDirty,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  mode!: MatDrawerMode;

  isSmallScreen!: boolean;

  comp?: Type<NavDrawerComponent>;

  @ViewChild('drawer') drawer!: MatDrawer;

  @ViewChild('sidenavTemplateRef', { read: ViewContainerRef })
  sidenavTemplateRef!: ViewContainerRef;

  isDrawerCreated = false;

  constructor(
    private snackBar: MatSnackBar,
    private breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document,
    private injector: Injector,
    private cfr: ComponentFactoryResolver
  ) {}

  /**
   * Mobil tasarimda, scroll kaydirilinca, asagi veya yukari durumuna gore,
   * fab width degeri degistir.
   */
  fabButtonMakeWidthOnScroll(): void {
    let prevScrollPosition = window.pageYOffset;
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPosition > currentScrollPos) {
        // document.getElementById('navbar').style.top = '0';
        console.log('yukari kaydir');
        document.getElementById('extended-fab')!.classList.remove('mini-fab');
      } else {
        // document.getElementById('navbar').style.top = '-50px';
        console.log('asagi kaydir');
        document.getElementById('extended-fab')!.classList.add('mini-fab');
      }
      prevScrollPosition = currentScrollPos;
    };
  }

  ngOnInit(): void {
    this.isSmallScreen = this.breakpointObserver.isMatched(
      '(max-width: 599px)'
    );
    this.isSmallScreen ? (this.mode = 'over') : 'side';
  }

  sidenavOpened(): void {
    this.document.body.style.overflow = 'hidden';
  }

  sidenavClosed(): void {
    this.document.body.style.overflow = '';
  }

  sheetOpened(): void {
    if (this.isSmallScreen) {
      this.document.body.style.overflow = 'hidden';
    }
  }

  sheetClosed(): void {
    this.document.body.style.overflow = '';
  }

  async openDrawer(): Promise<void> {
    if (!this.isDrawerCreated) {
      const { NavDrawerComponent: comp } = await import(
        './nav-drawer/nav-drawer.component'
      );
      const factory = this.cfr.resolveComponentFactory(comp);
      const { instance } = this.sidenavTemplateRef.createComponent(factory);
      instance.closeDrawer.subscribe(() => {
        this.drawer.close();
      });
      markDirty(this);
      this.isDrawerCreated = true;
    }

    await this.drawer.open();
  }
}
