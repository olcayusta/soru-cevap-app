import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagsComponent } from './tags.component';
import { TagListResolverService } from './resolvers/tag-list-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: TagsComponent,
    resolve: {tags: TagListResolverService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule {
}
