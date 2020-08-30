import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionsComponent } from './questions.component';
import { QuestionsResolverService } from './resolvers/questions-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: QuestionsComponent,
    resolve: {
      questions: QuestionsResolverService
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionsRoutingModule {
}
