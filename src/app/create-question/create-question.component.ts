import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ɵmarkDirty as markDirty,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QuestionService } from '../question/services/question.service';
import { DomSanitizer } from '@angular/platform-browser';
import { ChipsAutocompleteComponent } from './chips-autocomplete/chips-autocomplete.component';

interface IFormValue {
  title: string;
  description: string;
}

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateQuestionComponent implements OnInit {
  form: FormGroup;

  description!: string;

  worker!: Worker;

  @ViewChild(ChipsAutocompleteComponent)
  chipComponent!: ChipsAutocompleteComponent;

  constructor(
    private formBuilder: FormBuilder,
    private domSanitizer: DomSanitizer,
    private questionService: QuestionService
  ) {
    this.form = formBuilder.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }

  /**
   * Save question
   */
  submit(): void {
    const { title, description } = <IFormValue>this.form.value;
    const tags = this.chipComponent.tags;
    this.questionService
      .saveQuestion(title, description, tags)
      .subscribe((value) => {
        console.log(value);
      });
  }

  changeMetaThemeColor(): void {
    // @ts-ignore
    document
      .querySelector('meta[name=theme-color]')
      .setAttribute('content', '#6200EE');
  }

  ngOnInit(): void {
    this.form.get('description')!.valueChanges.subscribe((value) => {
      this.worker.postMessage(value);
    });
  }

  onBlur(): void {
    this.worker.terminate();
  }

  onFocus(): void {
    this.worker = new Worker('../marked.worker', {
      type: 'module',
      name: 'marked',
    });
    this.worker.onmessage = ({ data }) => {
      this.description = this.domSanitizer.bypassSecurityTrustHtml(
        data
      ) as string;
      markDirty(this);
    };
  }
}
