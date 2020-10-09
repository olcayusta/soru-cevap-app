import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[idLazyImg]'
})
export class LazyImgDirective implements OnInit, AfterViewInit {
  // @HostBinding('attr.src') src = null;
  @Input() qaLazyImg: string;

  constructor({nativeElement}: ElementRef<HTMLImageElement>, private elRef: ElementRef) {
    const supports = 'loading' in HTMLImageElement.prototype;

    if (supports) {
      nativeElement.setAttribute('loading', 'lazy');
      console.log('Support!');
    } else {
      // fallback
    }
  }

  ngOnInit(): void {
    // this.currentSrc = this.elRef.nativeElement.src;
  }

  ngAfterViewInit(): void {
    const obs = new IntersectionObserver((entries, observer) => {
      const entry = entries[0];
      const img = entry.target as HTMLImageElement;
      if (entry.isIntersecting) {
        img.src = this.qaLazyImg;
        obs.disconnect();
      }
    });
    obs.observe(this.elRef.nativeElement);
  }

}
