import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TagComponent } from './tag.component';
import { TagResolverService } from './resolvers/tag-resolver.service';

const routes: Routes = [
  {path: ':tagId', component: TagComponent, resolve: {tag: TagResolverService}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagRoutingModule {
}
