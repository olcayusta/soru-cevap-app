import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user.component';
import { UserResolverService } from './resolvers/user-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: UserComponent,
    resolve: { user: UserResolverService },
    children: [
      {
        path: 'questions',
        loadChildren: () => import('./user-questions/user-questions.module').then((m) => m.UserQuestionsModule)
      },
      {
        path: 'answers',
        loadChildren: () => import('./user-answers/user-answers.module').then((m) => m.UserAnswersModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
