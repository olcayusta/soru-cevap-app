import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobileSearchRoutingModule } from './mobile-search-routing.module';
import { MobileSearchComponent } from './mobile-search.component';
import { IconModule } from '../shared/icon/icon.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MobileSearchComponent],
  imports: [CommonModule, MobileSearchRoutingModule, IconModule, MatButtonModule]
})
export class MobileSearchModule {}
