import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationError, NavigationStart, ResolveEnd, ResolveStart, Router } from '@angular/router';
import { SocketService } from '@shared/services/socket.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SpinnerService } from '@shared/services/spinner.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SwPush } from '@angular/service-worker';
import { PushNotificationService } from '@shared/services/push-notification.service';

const VAPID_PUBLIC = 'BBuui5T3pIWV_ZyyZel8ynOQLlJO5juM6knPoBzg9shZjkmcqaFm0okyCbWOw2pxSSdEo2p9kiSQYn0V8A-GOjE';

@Component({
  selector: 'id-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('transformMenu', [
      state('void', style({
        opacity: 0,
        transform: 'scale(0.8)'
      })),
      transition('void => enter', animate('120ms cubic-bezier(0, 0, 0.2, 1)', style({
        opacity: 1,
        transform: 'scale(1)'
      }))),
      transition('* => void', animate('100ms 25ms linear', style({opacity: 0})))
    ]),
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({opacity: 0, height: '0px'}),
        animate('100ms', style({opacity: 1, height: '4px'})),
      ]),
      transition(':leave', [
        animate('100ms', style({opacity: 0, height: '0px'}))
      ])
    ]),
  ]
})
export class AppComponent implements OnInit {
  spinner = false;

  constructor(
    private router: Router,
    private socketService: SocketService,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute,
    private spinnerService: SpinnerService,
    private swPush: SwPush,
    private pushService: PushNotificationService
  ) {

    // Sw Push
    if (swPush.isEnabled) {
      swPush.requestSubscription({
        serverPublicKey: VAPID_PUBLIC
      }).then(subscription => {
        this.pushService.sendSubscriptionToTheServer(subscription).subscribe();
      }).catch(console.error);
    }

    // Resolve
    router.events.subscribe(value => {
      if (value instanceof ResolveStart) {
        this.spinner = true;
        this.spinnerService.addSpinner();
      }

      if (value instanceof ResolveEnd) {
        this.spinner = false;
        this.spinnerService.removeSpinner();
      }
    });
  }

  ngOnInit(): void {
    this.socketService.on('new answer').subscribe(value => {
      console.log('Sorunuza, yeni ber cevap geldi.');
      this.snackBar.open('One line text string.');
    });
  }

  animationEnd(): void {
    console.log('Animation end');

  }

  animationStart(): void {
    console.log('Animation start');
  }
}
