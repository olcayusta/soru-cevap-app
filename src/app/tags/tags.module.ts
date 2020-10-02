import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {TagsRoutingModule} from './tags-routing.module';
import {TagsComponent} from './tags.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [TagsComponent],
  imports: [
    CommonModule,
    TagsRoutingModule,
    MatCardModule
  ]
})
export class TagsModule {
}
