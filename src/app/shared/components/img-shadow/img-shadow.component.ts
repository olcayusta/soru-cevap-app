import {Component, OnInit, ChangeDetectionStrategy, Input} from '@angular/core';

@Component({
  selector: 'id-img-shadow',
  templateUrl: './img-shadow.component.html',
  styleUrls: ['./img-shadow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgShadowComponent implements OnInit {
  @Input() picture: string;
  @Input() displayName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
