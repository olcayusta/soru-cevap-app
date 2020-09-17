import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'id-chat-icon',
  templateUrl: 'chat-24px.svg',
  styles: [`:host {
    display: inline-flex;
  }`],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatIconComponent {
}
