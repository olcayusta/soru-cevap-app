import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'qa-bottom-bar',
  templateUrl: './bottom-bar.component.html',
  styleUrls: ['./bottom-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
