import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { RecentQuestionsComponent } from './components/recent-questions/recent-questions.component';
import { SharedModule } from '../shared/shared.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FilterComponent } from './components/filter/filter.component';
import {
  MAT_MENU_SCROLL_STRATEGY,
  MatMenuModule,
} from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { IsVisibleDirective } from './directives/is-visible.directive';
import { MatButtonModule } from '@angular/material/button';
import { BannerComponent } from './components/banner/banner.component';
import { MatDividerModule } from '@angular/material/divider';
import { SortByComponent } from './components/filter/sort-by/sort-by.component';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CloseScrollStrategy, Overlay } from '@angular/cdk/overlay';
import { FilterByComponent } from './components/filter/filter-by/filter-by.component';
import { GridListComponent } from './components/grid-list/grid-list.component';

function scrollFactory(overlay: Overlay): () => CloseScrollStrategy {
  return () => overlay.scrollStrategies.close();
}

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    RecentQuestionsComponent,
    FilterComponent,
    IsVisibleDirective,
    SortByComponent,
    FilterByComponent,
    GridListComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatProgressSpinnerModule,
    MatMenuModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatChipsModule,
  ],
  providers: [
    {
      provide: MAT_MENU_SCROLL_STRATEGY,
      useFactory: scrollFactory,
      deps: [Overlay],
    },
  ],
})
export class HomeModule {}
