import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
