import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './question.component';
import { QuestionContentComponent } from './question-content/question-content.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionAnswersComponent } from './question-answers/question-answers.component';
import { MatDividerModule } from '@angular/material/divider';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { SharedModule } from '../shared/shared.module';
import { WebCopyCodeComponent } from './web-copy-code/web-copy-code.component';
import { IconModule } from '../shared/icon/icon.module';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClipboardModule } from '@angular/cdk/clipboard';


@NgModule({
  declarations: [
    QuestionComponent,
    QuestionContentComponent,
    QuestionAnswersComponent,
    AnswerFormComponent,
    WebCopyCodeComponent
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDividerModule,
    SharedModule,
    IconModule,
    MatTooltipModule,
    ClipboardModule
  ]
})
export class QuestionModule {
}
