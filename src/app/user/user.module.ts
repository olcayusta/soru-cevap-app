import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { MatTabsModule } from '@angular/material/tabs';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule, MatTabsModule],
})
export class UserModule {}
