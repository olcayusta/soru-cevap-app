import { Component, Inject, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  ResolveEnd,
  ResolveStart,
  Router,
} from '@angular/router';
import { SocketService } from '@shared/services/socket.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpinnerService } from '@shared/services/spinner.service';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { PushNotificationService } from '@shared/services/push-notification.service';
import { environment } from '@environments/environment';
import { DOCUMENT } from '@angular/common';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  spinner = false;

  subscription!: Subscription;

  constructor(
    private router: Router,
    private socketService: SocketService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private spinnerService: SpinnerService,
    private swPush: SwPush,
    private swUpdate: SwUpdate,
    private pushService: PushNotificationService,
    private breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document
  ) {
    swUpdate.unrecoverable.subscribe((value) => {
      console.log(value.reason, value.type);
    });

    swUpdate.available.subscribe((event) => {
      console.log(event);
      const snackBar = this.snackBar.open('Available update!', 'TAMAM', {
        duration: 500000,
      });

      this.subscription = snackBar.onAction().subscribe((value) => {
        console.log(value);
        document.location.reload();
      });

      console.log(this.subscription.closed);
    });

    // Spinner
    router.events.subscribe((value) => {
      if (value instanceof ResolveStart) {
        this.spinner = true;
        this.spinnerService.addSpinner();
      }

      if (value instanceof ResolveEnd) {
        this.spinner = false;
        this.spinnerService.removeSpinner();
      }

      if (
        value instanceof (NavigationCancel || NavigationError || NavigationEnd)
      ) {
        this.spinner = false;
        this.spinnerService.removeSpinner();
      }
    });
  }

  async initSwPush(): Promise<void> {
    if (this.swPush.isEnabled) {
      try {
        const subscription = await this.swPush.requestSubscription({
          serverPublicKey: environment.vapidPublic,
        });
        this.pushService.sendSubscriptionToTheServer(subscription).subscribe();
      } catch (e) {
        console.error(e);
      }
    }
  }

  async ngOnInit(): Promise<void> {
    await this.initSwPush();

    /**
     * Make a notification for author user id for created answer for question.
     */
    this.socketService.on('new answer').subscribe((value) => {
      console.log('Sorunuza, yeni ber cevap geldi.');
      this.snackBar.open('One line text string.');
    });

    /*this.socketService.on('hello').subscribe(({ payload }) => {
      console.log(payload);
    });*/
  }
}
