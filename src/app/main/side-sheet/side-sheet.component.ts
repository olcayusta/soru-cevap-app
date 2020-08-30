import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'qa-side-sheet',
  templateUrl: './side-sheet.component.html',
  styleUrls: ['./side-sheet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideSheetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
