import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
