import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MarkedPipe} from './pipes/marked.pipe';
import {LazyImgDirective} from './directives/lazy-img.directive';
import {HomeQuestionListItemComponent} from './components/home-question-list-item/home-question-list-item.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    MarkedPipe,
    LazyImgDirective,
    HomeQuestionListItemComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    MatDividerModule,
    RouterModule
  ],
  exports: [
    MarkedPipe,
    LazyImgDirective,
    HomeQuestionListItemComponent
  ]
})
export class SharedModule {
}
