import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {RecentQuestionsComponent} from './recent-questions/recent-questions.component';
import {SharedModule} from '../shared/shared.module';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FilterComponent} from './filter/filter.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {IconModule} from '../shared/icon/icon.module';
import {IsVisibleDirective} from './is-visible.directive';
import {MatButtonModule} from '@angular/material/button';
import {BannerComponent} from './banner/banner.component';
import {MatDividerModule} from '@angular/material/divider';
import {SortByComponent} from './sort-by/sort-by.component';
import {MatIconModule} from '@angular/material/icon';
import {MatChipsModule} from '@angular/material/chips';
import {ModeComponent} from './mode/mode.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    RecentQuestionsComponent,
    FilterComponent,
    IsVisibleDirective,
    SortByComponent,
    ModeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    IconModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatChipsModule
  ]
})
export class HomeModule {
}
