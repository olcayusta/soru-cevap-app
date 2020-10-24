import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-list-item-avatar',
  templateUrl: './list-item-avatar.component.html',
  styleUrls: ['./list-item-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListItemAvatarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
