import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'qa-label-icon',
  templateUrl: './label-icon.component.html',
  styleUrls: ['./label-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LabelIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
