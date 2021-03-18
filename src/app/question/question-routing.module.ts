import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionComponent } from './question.component';
import { QuestionResolver } from './resolvers/question.resolver';

const routes: Routes = [
  {
    path: '',
    resolve: { question: QuestionResolver },
    component: QuestionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionRoutingModule {}
