import {
  AfterViewInit,
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  EmbeddedViewRef,
  Input,
  OnInit,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { WebCopyCodeComponent } from '../components/web-copy-code/web-copy-code.component';

// import { registerLanguage, highlight } from 'highlight.js';

// @ts-ignore
import hljs from 'highlight.js/lib/core';

// @ts-ignore
import javascript from 'highlight.js/lib/languages/javascript';
// @ts-ignore
import typescript from 'highlight.js/lib/languages/typescript';
// @ts-ignore
import css from 'highlight.js/lib/languages/css';
// @ts-ignore
import sql from 'highlight.js/lib/languages/sql';
// @ts-ignore
import php from 'highlight.js/lib/languages/php';
// @ts-ignore
import xml from 'highlight.js/lib/languages/xml';
// @ts-ignore
import cos from 'highlight.js/lib/languages/cos';

hljs.registerLanguage('js', javascript);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('php', php);
hljs.registerLanguage('sql', sql);
hljs.registerLanguage('cos', cos);

import { DevsiteCodeComponent } from '../components/devsite-code/devsite-code.component';

hljs.configure({
  languages: ['javascript', 'typescript', 'sql', 'xml', 'css', 'php', 'cos'],
});

@Directive({
  selector: '[appPrivateHighlight]',
})
export class PrivateHighlightDirective implements OnInit, AfterViewInit {
  @Input() appPrivateHighlight!: string;
  div: HTMLDivElement = this.renderer.createElement('div');

  constructor(
    private elementRef: ElementRef<HTMLPreElement>,
    private cfr: ComponentFactoryResolver,
    private vcr: ViewContainerRef,
    private renderer: Renderer2
  ) {}

  ngOnInit() {}

  test(): void {
    // @ts-ignore
    const lang = value.querySelector('code').className;
    if (lang) {
      // import detect language file and highlight
    } else {
      // auto detect
    }
  }

  ngAfterViewInit(): void {
    this.renderer.setProperty(this.div, 'innerHTML', this.appPrivateHighlight);

    const blocks = this.div.querySelectorAll('pre');
    blocks.forEach((value) => {
      const codeElement = value.querySelector('code');
      const lang = codeElement?.className.split('language-')[1];
      const language = hljs.getLanguage(lang);

      hljs.highlightBlock(codeElement);

      this.createComponent(value);
      // this.loadComponent();
    });

    this.renderer.appendChild(this.elementRef.nativeElement, this.div);
  }

  loadComponent() {
    const factory = this.cfr.resolveComponentFactory(DevsiteCodeComponent);
    const compRef = this.vcr.createComponent<DevsiteCodeComponent>(factory);
    const hostView = compRef.hostView as EmbeddedViewRef<any>;
    const rootNode = hostView.rootNodes[0];
    console.log(rootNode);

    const div = this.renderer.createElement('div');
    console.log(div);
    this.renderer.appendChild(div, rootNode);
    console.log(div);
  }

  createComponent(value: HTMLPreElement) {
    const factory = this.cfr.resolveComponentFactory(WebCopyCodeComponent);
    const compRef = this.vcr.createComponent<WebCopyCodeComponent>(factory);

    const hostView = compRef.hostView as EmbeddedViewRef<WebCopyCodeComponent>;

    compRef.instance.text = value;

    value.replaceWith(hostView.rootNodes[0]);
    // hostView.rootNodes[0].appendChild(compRef.instance.text);

    // FIXME
    hostView.detectChanges();
    // compRef.instance.lang = value.className.split(' ')[1];
  }
}
