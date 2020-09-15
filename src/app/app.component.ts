import { Component, OnInit } from '@angular/core';
import { ResolveEnd, ResolveStart, Router } from '@angular/router';

@Component({
  selector: 'qa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  spinner = false;

  constructor(
    private router: Router
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

  ngOnInit(): void {
  }
}
