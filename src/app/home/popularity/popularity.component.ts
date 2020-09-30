import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'qa-popularity',
  templateUrl: './popularity.component.html',
  styleUrls: ['./popularity.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopularityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
