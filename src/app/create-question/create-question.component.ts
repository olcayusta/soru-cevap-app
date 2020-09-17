import { Component, OnInit, ChangeDetectionStrategy, ɵmarkDirty as markDirty } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from '@shared/services/question.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'id-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateQuestionComponent implements OnInit {
  form: FormGroup;

  description;

  worker: Worker;

  constructor(
    private fb: FormBuilder,
    private domSanitizer: DomSanitizer,
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
    // document.querySelector('meta[name=theme-color]').setAttribute('content', '#fff');
    this.form.get('description').valueChanges.subscribe(value => {
      this.worker.postMessage(value);
    });
  }

  onBlur(): void {
    this.worker.terminate();
  }

  onFocus(): void {
    this.worker = new Worker('../marked.worker', {type: 'module', name: 'marked'});
    this.worker.onmessage = ({data}) => {
      this.description = this.domSanitizer.bypassSecurityTrustHtml(data);
      markDirty(this);
    };
  }
}
