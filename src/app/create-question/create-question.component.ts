import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { parse } from 'marked';
import { QuestionService } from '../shared/services/question.service';

@Component({
  selector: 'qa-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateQuestionComponent implements OnInit {
  form: FormGroup;

  description;

  constructor(
    private fb: FormBuilder,
    private questionService: QuestionService
  ) {
    this.form = fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]]
    });
  }

  submit(): void {
    const {title, description} = this.form.value;
    this.questionService.saveQuestion(title, description, description).subscribe(value => {
      console.log(value);
    });
  }

  ngOnInit(): void {
    document.querySelector('meta[name=theme-color]').setAttribute('content', '#fff');
    this.form.get('description').valueChanges.subscribe(value => {
      this.description = parse(value);
    });
  }
}
