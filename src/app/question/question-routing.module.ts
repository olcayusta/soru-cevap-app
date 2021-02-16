import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';

import { QuestionComponent } from './question.component';
import { QuestionResolver } from './question.resolver';

/*export type RouteData = {
  title?: string;
  question?: Question;
};

export type AppRoute = Route & {
  data?: RouteData;
};*/

const routes: Routes = [
  {
    path: '',
    resolve: { question: QuestionResolver },
    component: QuestionComponent,
    data: {
      title: 'Spider-Man',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuestionRoutingModule {}
