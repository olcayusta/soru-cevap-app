import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RecentQuestionsComponent } from './recent-questions/recent-questions.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        component: RecentQuestionsComponent
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
        canLoad: [AuthGuard]
      },
      {
        path: 'questions',
        loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule)
      },
      {
        path: 'tag',
        loadChildren: () => import('./tag/tag.module').then(m => m.TagModule)
      },
      {
        path: 'tags',
        loadChildren: () => import('./tags/tags.module').then(m => m.TagsModule)
      },
      {
        path: 'create',
        loadChildren: () => import('./create-question/create-question.module').then(m => m.CreateQuestionModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'question/:questionId',
        loadChildren: () => import('./question/question.module').then(m => m.QuestionModule)
      },
      { path: 'edit', loadChildren: () => import('./edit/edit.module').then(m => m.EditModule) }
    ]
  },
  {path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)},
  {path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule)},
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
