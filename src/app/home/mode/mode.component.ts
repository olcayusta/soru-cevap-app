import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'qa-mode',
  templateUrl: './mode.component.html',
  styleUrls: ['./mode.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
