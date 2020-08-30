import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'qa-user-answers',
  templateUrl: './user-answers.component.html',
  styleUrls: ['./user-answers.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAnswersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
