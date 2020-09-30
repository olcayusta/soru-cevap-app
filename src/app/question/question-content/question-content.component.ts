import {
  AfterViewInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component, ComponentFactoryResolver, ElementRef, EmbeddedViewRef,
  Input,
  OnInit, ViewChild, ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import {WebCopyCodeComponent} from '../web-copy-code/web-copy-code.component';

import hljs from 'highlight.js';

hljs.configure({
  languages: ['javascript', 'typescript', 'sql']
});

@Component({
  selector: 'id-question-content',
  templateUrl: './question-content.component.html',
  styleUrls: ['./question-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class QuestionContentComponent implements OnInit, AfterViewInit {
  @Input() content: string;
  @ViewChild('divElement') divElement: ElementRef<HTMLDivElement>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private vcr: ViewContainerRef,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.divElement.nativeElement.querySelectorAll('pre')
      .forEach((block: HTMLElement) => {

        const factory = this.resolver.resolveComponentFactory(WebCopyCodeComponent);
        const compRef = this.vcr.createComponent<WebCopyCodeComponent>(factory);

        const hostView = compRef.hostView as EmbeddedViewRef<any>;
        const el = hostView.rootNodes[0];

        block.replaceWith(hostView.rootNodes[0]);

        compRef.instance.text = block;

        /*  const worker = new Worker('./highlight.worker', {type: 'module'});

          worker.onmessage = ({data}) => {
            const {language, value} = data;
            block.classList.add('hljs', language);
            block.innerHTML = value;
          };
          worker.postMessage(block.textContent);*/

      });
  }
}
