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
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    QuestionComponent,
    QuestionContentComponent,
    QuestionAnswersComponent,
    AnswerFormComponent
  ],
  imports: [
    CommonModule,
    QuestionRoutingModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDividerModule,
    MatIconModule,
    SharedModule
  ]
})
export class QuestionModule {
}
