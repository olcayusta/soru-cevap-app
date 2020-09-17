import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyImgDirective } from './directives/lazy-img.directive';
import { HomeQuestionListItemComponent } from './components/home-question-list-item/home-question-list-item.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { RouterModule } from '@angular/router';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { HighlightSearchPipe } from '../search-form/pipes/highlight-search.pipe';

@NgModule({
  declarations: [
    LazyImgDirective,
    HomeQuestionListItemComponent,
    TimeAgoPipe,
    HighlightSearchPipe
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatDividerModule,
    RouterModule,
    MatTooltipModule
  ],
  exports: [
    LazyImgDirective,
    HomeQuestionListItemComponent,
    HighlightSearchPipe
  ]
})
export class SharedModule {
}
