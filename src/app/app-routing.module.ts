import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { RecentQuestionsComponent } from './home/recent-questions/recent-questions.component';
import { AuthGuard } from './auth/auth.guard';
import { BaseGuard } from './base.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
        canLoad: [AuthGuard],
        data: {
          title: 'BATMAN'
        }
      },
      {
        path: 'tags',
        loadChildren: () => import('./tags/tags.module').then(m => m.TagsModule)
      },
      {
        path: 'tag',
        loadChildren: () => import('./tag/tag.module').then(m => m.TagModule)
      },
      {
        path: 'search/:searchTerm',
        loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
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
        path: 'list',
        loadChildren: () => import('./list/list.module').then(m => m.ListModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then(m => m.UserModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./notifications/notifications.module').then(m => m.NotificationsModule)
      },
      {
        path: 'question/:questionId',
        loadChildren: () => import('./question/question.module').then(m => m.QuestionModule)
      },
      {
        path: 'edit',
        loadChildren: () => import('./edit/edit.module').then(m => m.EditModule)
      }
    ]
  },
  {path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule)},
  {path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule)},
  {path: '404', loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)},
  {path: 'mobile-search', loadChildren: () => import('./mobile-search/mobile-search.module').then(m => m.MobileSearchModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    enableTracing: false
    // scrollOffset: [0, 0]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
