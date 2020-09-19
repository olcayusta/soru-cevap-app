import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RecentQuestionsComponent } from './recent-questions/recent-questions.component';
import { SharedModule } from '../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FilterComponent } from './filter/filter.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IconModule } from '../shared/icon/icon.module';
import { IsVisibleDirective } from './is-visible.directive';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [HomeComponent, RecentQuestionsComponent, FilterComponent, IsVisibleDirective],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    IconModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatCheckboxModule,
    MatButtonModule
  ]
})
export class HomeModule {
}
