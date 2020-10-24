import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-mobile-app-info',
  templateUrl: './mobile-app-info.component.html',
  styleUrls: ['./mobile-app-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileAppInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
