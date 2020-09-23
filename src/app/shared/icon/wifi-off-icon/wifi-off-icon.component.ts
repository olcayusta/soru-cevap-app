import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-wifi-off-icon',
  templateUrl: 'signal_wifi_off-24px.svg',
  styles: [`:host {
    display: inline-flex;
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WifiOffIconComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
