import {Component, OnInit, ChangeDetectionStrategy, ɵmarkDirty as markDirty} from '@angular/core';
import {Question} from '@shared/models/question.model';
import {ActivatedRoute} from '@angular/router';
import {AnswerService} from '@shared/services/answer.service';
import {StateService} from '@shared/services/state.service';
import {Title} from '@angular/platform-browser';
import {environment} from '@environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionComponent implements OnInit {
  question$: Observable<Question>;

  constructor(
    private route: ActivatedRoute,
    private answerService: AnswerService,
    private stateService: StateService,
    private title: Title
  ) {
  }

  ngOnInit(): void {
    this.question$ = this.route.data.pipe(map(value => {
      return value.question;
    }));
    markDirty(this);


    // this.title.setTitle(`${this.question.title} - ${environment.appTitle}`);
    this.stateService.hide();
  }
}
