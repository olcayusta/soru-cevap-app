import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDrawerMode } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { SocketService } from '../shared/services/socket.service';

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

  notifyMe(): void {
    // Let's check if the browser supports notifications
    if (!('Notification' in window)) {
      alert('This browser does not support desktop notification');
    }

    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === 'granted') {
      // If it's okay let's create a notification
      const notification = new Notification('Hi there!', {
        icon: 'https://resources.tidal.com/images/3f5fb645/46b8/44c4/9721/e60ec54c2fa1/320x320.jpg',
        body: 'My body!'
      });
    }

    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === 'granted') {
          const notification = new Notification('Hi there!', {
            icon: 'https://resources.tidal.com/images/3f5fb645/46b8/44c4/9721/e60ec54c2fa1/320x320.jpg',
            body: 'My body!'
          });
        }
      });
    }
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
