import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Question } from '@shared/models/question.model';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from '@shared/services/answer.service';
import { StateService } from '@shared/services/state.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'qa-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionComponent implements OnInit {
  question: Question;

  constructor(
    private route: ActivatedRoute,
    private answerService: AnswerService,
    private stateService: StateService,
    private title: Title
  ) {
  }

  ngOnInit(): void {
    this.question = this.route.snapshot.data.question;
    this.title.setTitle(`${this.question.title}`);
    this.stateService.hide();
  }
}
