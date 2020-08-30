import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'qa-chat-icon',
  templateUrl: 'chat-24px.svg',
  styleUrls: ['./chat-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
