import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagsComponent } from './tags.component';
import { TagsResolver } from './resolvers/tags.resolver';

const routes: Routes = [
  {
    path: '',
    component: TagsComponent,
    resolve: { tags: TagsResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TagsRoutingModule {}
