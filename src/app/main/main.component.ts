import { Component, OnInit, ChangeDetectionStrategy, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDrawerMode } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { SocketService } from '@shared/services/socket.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent implements OnInit {
  mode!: MatDrawerMode;

  // any
  isSmallScreen: any;

  constructor(
    private snackBar: MatSnackBar,
    private breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document,
    private socketService: SocketService
  ) {}

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
    const isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
    this.isSmallScreen = this.breakpointObserver.isMatched('(max-width: 599px)');
    if (isSmallScreen) {
      this.mode = 'over';
    } else {
      this.mode = 'side';
    }

    this.snackBar.open('Sorunuza yanıt geldi', 'TAMAM', {
      horizontalPosition: 'start'
    });

    /* this.socketService.subject.subscribe(value => {
       console.log(value);
       this.snackBar.open('Sorunuza yanıt geldi', 'TAMAM');
     });*/
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
}
