import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AuthGuard } from './auth/auth.guard';
import { MobileAppInfoComponent } from './mobile-app-info/mobile-app-info.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: async () => (await import('./home/home.module')).HomeModule
      },
      {
        path: 'users',
        loadChildren: async () => (await import('./users/users.module')).UsersModule,
        canLoad: [AuthGuard],
        data: {
          title: 'BATMAN'
        }
      },
      {
        path: 'tags',
        loadChildren: async () => (await import('./tags/tags.module')).TagsModule
      },
      {
        path: 'tag',
        loadChildren: async () => (await import('./tag/tag.module')).TagModule
      },
      {
        path: 'search/:searchTerm',
        loadChildren: async () => (await import('./search/search.module')).SearchModule
      },
      {
        path: 'settings',
        loadChildren: async () => (await import('./settings/settings.module')).SettingsModule
      },
      {
        path: 'list',
        loadChildren: async () => (await import('./list/list.module')).ListModule
      },
      {
        path: 'user/:userId',
        loadChildren: async () => (await import('./user/user.module')).UserModule
      },
      {
        path: 'notifications',
        loadChildren: async () => (await import('./notifications/notifications.module')).NotificationsModule
      },
      {
        path: 'question/:questionId',
        loadChildren: async () => (await import('./question/question.module')).QuestionModule
      },
      {
        path: 'edit',
        loadChildren: async () => (await import('./edit/edit.module')).EditModule
      },
      {
        path: 'favorites',
        loadChildren: async () => (await import('./favorites/favorites.module')).FavoritesModule
      },
      {
        path: 'help',
        loadChildren: async () => (await import('./help/help.module')).HelpModule
      }
    ]
  },
  {
    path: 'login',
    loadChildren: async () => (await import('./auth/login/login.module')).LoginModule
  },
  {
    path: 'register',
    loadChildren: async () => (await import('./auth/register/register.module')).RegisterModule
  },
  {
    path: '404',
    loadChildren: async () => (await import('./page-not-found/page-not-found.module')).PageNotFoundModule
  },
  {
    path: 'app',
    component: MobileAppInfoComponent
  },
  {
    path: 'create',
    loadChildren: async () => (await import('./create-question/create-question.module')).CreateQuestionModule
  },
  {
    path: '**',
    loadChildren: async () => (await import('./page-not-found/page-not-found.module')).PageNotFoundModule
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      urlUpdateStrategy: 'eager',
      enableTracing: false
      // scrollOffset: [0, 0]
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
