import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateQuestionRoutingModule } from './create-question-routing.module';
import { CreateQuestionComponent } from './create-question.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { ChipsAutocompleteComponent } from './chips-autocomplete/chips-autocomplete.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { QuestionDescriptionComponent } from './question-description/question-description.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [CreateQuestionComponent, ChipsAutocompleteComponent, QuestionDescriptionComponent],
  imports: [
    CommonModule,
    CreateQuestionRoutingModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule
  ]
})
export class CreateQuestionModule {}
