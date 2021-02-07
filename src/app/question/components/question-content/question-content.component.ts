import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  EmbeddedViewRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { WebCopyCodeComponent } from '../../web-copy-code/web-copy-code.component';

import hljs from 'highlight.js';

hljs.configure({
  languages: ['javascript', 'typescript', 'sql'],
});

@Component({
  selector: 'app-question-content',
  templateUrl: './question-content.component.html',
  styleUrls: ['./question-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class QuestionContentComponent implements OnInit, AfterViewInit {
  @Input() content!: string;
  @ViewChild('divElement') divElement!: ElementRef<HTMLDivElement>;
  @ViewChild('divElement2', { read: ElementRef }) divElement2!: ElementRef<HTMLDivElement>;

  div!: HTMLDivElement;

  constructor(private resolver: ComponentFactoryResolver, private vcr: ViewContainerRef) {}

  ngOnInit(): void {
    this.div = document.createElement('div');
    this.div.innerHTML = this.content;
  }

  ngAfterViewInit(): void {
    this.div.querySelectorAll('pre').forEach((block: HTMLElement) => {
      const factory = this.resolver.resolveComponentFactory(WebCopyCodeComponent);
      const compRef = this.vcr.createComponent<WebCopyCodeComponent>(factory);

      const hostView = compRef.hostView as EmbeddedViewRef<any>;

      compRef.instance.text = block;

      block.replaceWith(hostView.rootNodes[0]);
      hostView.rootNodes[0].appendChild(compRef.instance.text);

      hljs.highlightBlock(block);

      compRef.instance.lang = block.className.split(' ')[1];
    });
    this.divElement2.nativeElement.appendChild(this.div);
  }
}
