import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'qa-img-shadow',
  templateUrl: './img-shadow.component.html',
  styleUrls: ['./img-shadow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImgShadowComponent implements OnInit {
  @Input() src!: string;
  @Input() alt!: string;
  @ViewChild('imageElement') imageElement!: ElementRef<HTMLImageElement>;

  @Input() width: number = 40;
  @Input() height: number = 40;

  imgURL!: string;

  constructor(private elRef: ElementRef) {}

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
