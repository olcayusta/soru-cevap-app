import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LazyImgDirective} from './directives/lazy-img.directive';
import {HomeQuestionListItemComponent} from './components/home-question-list-item/home-question-list-item.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {RouterModule} from '@angular/router';
import {TimeAgoPipe} from './pipes/time-ago.pipe';
import {MatTooltipModule} from '@angular/material/tooltip';
import {HighlightSearchPipe} from '../search-form/pipes/highlight-search.pipe';
import {MatIconModule} from '@angular/material/icon';
import {ImgShadowComponent} from './components/img-shadow/img-shadow.component';
import {MarkedPipe} from '@shared/pipes/marked.pipe';

@NgModule({
  declarations: [
    LazyImgDirective,
    HomeQuestionListItemComponent,
    TimeAgoPipe,
    HighlightSearchPipe,
    ImgShadowComponent,
    MarkedPipe
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatDividerModule,
    RouterModule,
    MatTooltipModule,
    MatIconModule
  ],
  exports: [
    LazyImgDirective,
    HomeQuestionListItemComponent,
    HighlightSearchPipe,
    TimeAgoPipe
  ]
})
export class SharedModule {
}
