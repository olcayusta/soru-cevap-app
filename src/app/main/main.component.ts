import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
  Type,
  ViewChild,
  Injector,
  Injectable,
  EventEmitter,
  ViewContainerRef,
  ComponentFactoryResolver,
  Output,
  ɵmarkDirty as markDirty,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDrawer, MatDrawerMode } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';

@Injectable({
  providedIn: 'root',
})
export class Info {
  @Output() close = new EventEmitter<any>();
  opened?: boolean = true;
}

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
  myInjector: Injector;

  @ViewChild('compRef', { read: ViewContainerRef }) compRef!: ViewContainerRef;

  isDrawerCreated = false;

  constructor(
    private snackBar: MatSnackBar,
    private breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document,
    private injector: Injector,
    private cfr: ComponentFactoryResolver,
    private info: Info
  ) {
    let title = 'my dynamic title works!';
    this.myInjector = Injector.create({
      providers: [
        {
          provide: Info,
        },
      ],
      parent: injector,
    });
  }

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
    const isSmallScreen = this.breakpointObserver.isMatched(
      '(max-width: 599px)'
    );
    this.isSmallScreen = isSmallScreen;
    isSmallScreen ? (this.mode = 'over') : 'side';
  }

  makeOverflowAuto(): void {
    this.document.body.style.overflow = '';
  }

  makeOverflowHidden(): void {
    this.document.body.style.overflow = 'hidden';
  }

  drawerOpenedStart(): void {
    if (this.isSmallScreen) {
      this.document.body.style.overflow = 'hidden';
    }
  }

  drawerClosedStart(): void {
    this.document.body.style.overflow = '';
  }

  async openDrawer(): Promise<void> {
    /*    const { NavDrawerComponent: comp } = await import(
      './nav-drawer/nav-drawer.component'
    );

    this.comp = comp;
    markDirty(this);
    await this.drawer.open();*/
    // await this.drawer.open();
  }

  async openDrawer2(): Promise<void> {
    if (!this.isDrawerCreated) {
      const { NavDrawerComponent: comp } = await import(
        './nav-drawer/nav-drawer.component'
      );
      const factory = this.cfr.resolveComponentFactory(comp);
      const vcr = this.compRef.createComponent(factory);
      vcr.instance.closeDrawer.subscribe(() => {
        this.drawer.close();
      });
      markDirty(this);
      this.isDrawerCreated = true;
    }

    await this.drawer.open();
  }
}
