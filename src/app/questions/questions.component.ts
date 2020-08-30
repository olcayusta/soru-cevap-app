import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'qa-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
