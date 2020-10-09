import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsComponent } from './tags.component';
import { MatCardModule } from '@angular/material/card';
import { TagListItemComponent } from './tag-list-item/tag-list-item.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    TagsComponent,
    TagListItemComponent
  ],
  imports: [
    CommonModule,
    TagsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class TagsModule {
}
