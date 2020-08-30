import { Component } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';
import { SocketService } from './shared/services/socket.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'qa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'soru-cevap-app';

  spinner = false;

  constructor(
    private router: Router,
    private socketService: SocketService,
    private snackBar: MatSnackBar
  ) {
    router.events.subscribe(value => {
      if (value instanceof ResolveStart) {
        this.spinner = true;
      }

      if (value instanceof ResolveEnd) {
        this.spinner = false;
      }
    });
  }
}
