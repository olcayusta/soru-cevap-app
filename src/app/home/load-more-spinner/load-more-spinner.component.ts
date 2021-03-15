import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-load-more-spinner',
  templateUrl: './load-more-spinner.component.html',
  styleUrls: ['./load-more-spinner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadMoreSpinnerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
