import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UsersComponent} from './users.component';
import {UserListResolverService} from './resolvers/user-list-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    resolve: {users: UserListResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
