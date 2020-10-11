import { AfterViewInit, Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective implements AfterViewInit {
  @Output() isVisible = new EventEmitter();

  constructor(
    private elementRef: ElementRef<HTMLElement>
  ) {
  }

  ngAfterViewInit(): void {
    const obs = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        this.isVisible.emit();
      }
    });
    obs.observe(this.elementRef.nativeElement);
  }

}
