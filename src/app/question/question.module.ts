import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionRoutingModule } from './question-routing.module';
import { QuestionComponent } from './question.component';
import { QuestionContentComponent } from './components/question-content/question-content.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { QuestionAnswersComponent } from './components/question-answers/question-answers.component';
import { MatDividerModule } from '@angular/material/divider';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { SharedModule } from '../shared/shared.module';
import { WebCopyCodeComponent } from './web-copy-code/web-copy-code.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { QuestionCommentListComponent } from './components/question-comment-list/question-comment-list.component';
import { QuestionAnswerItemComponent } from './components/question-answer-item/question-answer-item.component';
import { QuestionAnswerItemContentComponent } from './components/question-answer-item/question-answer-item-content/question-answer-item-content.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [
    QuestionComponent,
    QuestionContentComponent,
    QuestionAnswersComponent,
    AnswerFormComponent,
    WebCopyCodeComponent,
    QuestionCommentListComponent,
    QuestionAnswerItemComponent,
    QuestionAnswerItemContentComponent
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
    MatTooltipModule,
    ClipboardModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class QuestionModule {}
