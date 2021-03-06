import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './components/list.component';
import { SharedModule } from '../../shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [ListComponent],
  imports: [CommonModule, ListRoutingModule, SharedModule, MatDividerModule],
})
export class ListModule {}
