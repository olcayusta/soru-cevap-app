import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AnswerService } from '@shared/services/answer.service';

@Component({
  selector: 'qa-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnswerFormComponent implements OnInit {
  answerControl = new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private answerService: AnswerService
  ) {
  }

  ngOnInit(): void {
  }

  formSubmit(): void {
    const questionId = this.route.snapshot.paramMap.get('questionId');
    this.answerService.create(+questionId, this.answerControl.value).subscribe(value => {
      console.log(value);
    });
  }
}
