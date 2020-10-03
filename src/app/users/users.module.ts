import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserListItemComponent } from './user-list-item/user-list-item.component';
import { UserListComponent } from './user-list/user-list.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [UsersComponent, UserListItemComponent, UserListComponent],
    imports: [
        CommonModule,
        UsersRoutingModule,
        MatDividerModule,
        MatButtonModule
    ]
})
export class UsersModule { }
