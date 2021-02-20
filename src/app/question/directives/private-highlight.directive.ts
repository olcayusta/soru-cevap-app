import {
  AfterViewInit,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  Input,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { WebCopyCodeComponent } from '../components/web-copy-code/web-copy-code.component';

import { highlightBlock, configure, registerLanguage } from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import sql from 'highlight.js/lib/languages/sql';
import html from 'highlight.js/lib/languages/html';
import php from 'highlight.js/lib/languages/php';

configure({
  languages: ['javascript', 'typescript', 'sql', 'html', 'css', 'php'],
});

@Directive({
  selector: '[appPrivateHighlight]',
})
export class PrivateHighlightDirective implements AfterViewInit {
  @Input() appPrivateHighlight!: string;
  div: HTMLDivElement = this.renderer.createElement('div');

  constructor(
    private elementRef: ElementRef<HTMLPreElement>,
    private resolver: ComponentFactoryResolver,
    private vcr: ViewContainerRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.renderer.setProperty(this.div, 'innerHTML', this.appPrivateHighlight);

    const blocks = this.div.querySelectorAll('pre');
    blocks.forEach((value) => {
      /**
       * Eger bir language varsa, o dilde renklendir.
       * Yoksa, otomatk olarak renklendir
       */

      // @ts-ignore
      const lang = value.querySelector('code').className;
      console.log(`Language => ${lang}`);

      highlightBlock(value);

      const factory = this.resolver.resolveComponentFactory(WebCopyCodeComponent);
      const compRef = this.vcr.createComponent<WebCopyCodeComponent>(factory);

      const hostView = compRef.hostView as EmbeddedViewRef<WebCopyCodeComponent>;

      compRef.instance.text = value;

      value.replaceWith(hostView.rootNodes[0]);
      hostView.rootNodes[0].appendChild(compRef.instance.text);

      // FIXME
      hostView.detectChanges();
      // compRef.instance.lang = value.className.split(' ')[1];
    });

    // this.elementRef.nativeElement.appendChild(this.div);
    this.renderer.appendChild(this.elementRef.nativeElement, this.div);
  }
}
