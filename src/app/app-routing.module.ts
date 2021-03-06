import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: async () =>
          (await import('./home/home.module')).HomeModule,
      },
      {
        path: 'users',
        loadChildren: async () =>
          (await import('./users/users.module')).UsersModule,
        canLoad: [AuthGuard],
      },
      {
        path: 'tags',
        loadChildren: async () =>
          (await import('./tags/tags.module')).TagsModule,
      },
      {
        path: 'tag',
        loadChildren: async () => (await import('./tag/tag.module')).TagModule,
      },
      {
        path: 'search',
        loadChildren: async () =>
          (await import('@modules/search/search.module')).SearchModule,
      },
      {
        path: 'settings',
        loadChildren: async () =>
          (await import('./settings/settings.module')).SettingsModule,
        canLoad: [AuthGuard],
      },
      {
        path: 'list',
        loadChildren: () =>
          import('@modules/list/list.module').then((value) => value.ListModule),
      },
      {
        path: 'user/:userId',
        loadChildren: async () =>
          (await import('./user/user.module')).UserModule,
      },
      {
        path: 'question/:questionId',
        loadChildren: async () =>
          (await import('./question/question.module')).QuestionModule,
      },
      {
        path: 'create',
        loadChildren: async () =>
          (await import('./create-question/create-question.module'))
            .CreateQuestionModule,
      },
      {
        path: 'edit',
        loadChildren: async () =>
          (await import('./modules/edit/edit.module')).EditModule,
      },
      {
        path: 'favorites',
        loadChildren: async () =>
          (await import('./modules/favorites/favorites.module'))
            .FavoritesModule,
      },
      {
        path: 'help',
        loadChildren: async () =>
          (await import('./modules/help/help.module')).HelpModule,
      },
    ],
  },
  {
    path: 'login',
    loadChildren: async () =>
      (await import('./auth/login/login.module')).LoginModule,
  },
  {
    path: 'register',
    loadChildren: async () =>
      (await import('./auth/register/register.module')).RegisterModule,
  },
  {
    path: '404',
    loadChildren: async () =>
      (await import('./page-not-found/page-not-found.module'))
        .PageNotFoundModule,
  },
  {
    path: '**',
    loadChildren: async () =>
      (await import('./page-not-found/page-not-found.module'))
        .PageNotFoundModule,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      urlUpdateStrategy: 'eager',
      enableTracing: false,
      scrollPositionRestoration: 'enabled',
      // scrollOffset: [0, 0]
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
