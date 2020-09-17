import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, ComponentFactoryResolver, ElementRef, EmbeddedViewRef,
  Input,
  OnInit, ViewChild, ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import { WebCopyCodeComponent } from '../web-copy-code/web-copy-code.component';

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
    private vcr: ViewContainerRef
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.divElement.nativeElement.querySelectorAll('pre')
      .forEach((block: HTMLElement) => {

        const factory = this.resolver.resolveComponentFactory(WebCopyCodeComponent);

        const compRef = this.vcr.createComponent<WebCopyCodeComponent>(factory);
        compRef.instance.text = block;

        const hostView = compRef.hostView as EmbeddedViewRef<any>;
        block.replaceWith(hostView.rootNodes[0]);

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
