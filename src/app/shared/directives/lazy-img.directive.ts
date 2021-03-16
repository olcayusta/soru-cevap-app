import { Directive, ElementRef, HostBinding, OnInit } from '@angular/core';

@Directive({
  selector: '[qaLazyImg]',
})
export class LazyImgDirective implements OnInit {
  @HostBinding('attr.src') src = null;
  imgSrc!: string;

  constructor(private elementRef: ElementRef<HTMLImageElement>) {}

  ngOnInit(): void {
    const { nativeElement } = this.elementRef;
    this.imgSrc = nativeElement.src;

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      const { isIntersecting, target } = entry;
      const img = target as HTMLImageElement;
      if (isIntersecting) {
        img.src = this.imgSrc;
        img.style.opacity = '1';
        intersectionObserver.disconnect();
      }
    });
    intersectionObserver.observe(nativeElement);
  }
}
