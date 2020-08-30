import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsIconComponent } from './notifications-icon/notifications-icon.component';
import { MenuIconComponent } from './menu-icon/menu-icon.component';
import { ChatIconComponent } from './chat-icon/chat-icon.component';
import { HomeIconComponent } from './home-icon/home-icon.component';

@NgModule({
  declarations: [NotificationsIconComponent, MenuIconComponent, ChatIconComponent, HomeIconComponent],
    exports: [
        NotificationsIconComponent,
        ChatIconComponent,
        HomeIconComponent
    ],
  imports: [
    CommonModule
  ]
})
export class IconModule {
}
