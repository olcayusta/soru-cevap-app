import { Component, OnInit, ChangeDetectionStrategy, Inject, Type, ɵmarkDirty as markDirty } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDrawerMode } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { SocketService } from '@shared/services/socket.service';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';

@Component({
  selector: 'qa-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit {
  mode: MatDrawerMode;

  isSmallScreen;

  constructor(
    private snackBar: MatSnackBar,
    private breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document,
    private socketService: SocketService
  ) {
  }

  ngOnInit(): void {
    const isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
    if (isSmallScreen) {
      this.mode = 'over';
    } else {
      this.mode = 'side';
    }
    /*this.snackBar.open('Sorunuza yanıt geldi', 'TAMAM', {
      horizontalPosition: 'start'
    });*/

    // this.notifyMe();

    /* this.socketService.subject.subscribe(value => {
       console.log(value);
       this.snackBar.open('Sorunuza yanıt geldi', 'TAMAM');
     });*/
  }

  sidenavClosedStart(): void {
    this.document.body.style.overflow = '';
  }

  sidenavOpenedStart(): void {
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
}
