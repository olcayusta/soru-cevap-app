import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'qa-group-icon',
  templateUrl: './group-icon.component.html',
  styleUrls: ['./group-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
