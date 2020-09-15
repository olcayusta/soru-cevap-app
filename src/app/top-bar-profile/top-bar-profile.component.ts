import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'qa-top-bar-profile',
  templateUrl: './top-bar-profile.component.html',
  styleUrls: ['./top-bar-profile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopBarProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
