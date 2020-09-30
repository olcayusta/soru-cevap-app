import {AfterViewInit, Directive, ElementRef} from '@angular/core';

import hljs from 'highlight.js';

hljs.configure({
  languages: ['javascript', 'typescript', 'sql']
});

@Directive({
  selector: '[idHighlight]'
})
export class HighlightDirective implements AfterViewInit {

  constructor(
    private elementRef: ElementRef
  ) {
  }

  ngAfterViewInit(): void {
    hljs.highlightBlock(this.elementRef.nativeElement);
  }
}
