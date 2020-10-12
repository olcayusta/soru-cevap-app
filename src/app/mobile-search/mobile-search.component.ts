import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'qa-mobile-search',
  templateUrl: './mobile-search.component.html',
  styleUrls: ['./mobile-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MobileSearchComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
