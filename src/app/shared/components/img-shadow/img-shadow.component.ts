import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ɵmarkDirty as markDirty,
  ViewChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'id-img-shadow',
  templateUrl: './img-shadow.component.html',
  styleUrls: ['./img-shadow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgShadowComponent implements OnInit {
  @Input() picture: string;
  @Input() displayName: string;
  @ViewChild('imageElement') imageElement: ElementRef<HTMLImageElement>;

  imgURL: string;

  constructor(
    private elRef: ElementRef
  ) {
  }

  ngOnInit(): void {
    // const img = new Image();
    // img.src = this.picture;
    // img.onload = (ev) => {
    //   this.imgURL = this.picture;
    //   this.elRef.nativeElement.setAttribute('loaded', '');
    //   markDirty(this);
    // };
  }

}
