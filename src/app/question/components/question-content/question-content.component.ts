import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  ElementRef,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-question-content',
  templateUrl: './question-content.component.html',
  styleUrls: ['./question-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class QuestionContentComponent implements OnInit, AfterViewInit {
  @Input() content!: string;
  @ViewChild('divElement2', { read: ElementRef }) divElement2!: ElementRef<HTMLDivElement>;

  div: HTMLDivElement = document.createElement('div');

  constructor(private resolver: ComponentFactoryResolver, private vcr: ViewContainerRef) {}

  ngOnInit(): void {}

  initHighlight() {
    /*this.div.innerHTML = this.content;

    this.div.querySelectorAll('pre').forEach((block: HTMLElement) => {
      const factory = this.resolver.resolveComponentFactory(WebCopyCodeComponent);
      const compRef = this.vcr.createComponent<WebCopyCodeComponent>(factory);

      const hostView = compRef.hostView as EmbeddedViewRef<any>;

      compRef.instance.text = block;

      block.replaceWith(hostView.rootNodes[0]);
      hostView.rootNodes[0].appendChild(compRef.instance.text);

      highlightBlock(block);

      // @ts-ignore
      /!*      const response = highlightAuto(block.textContent).language;
            console.log(response);*!/

      compRef.instance.lang = block.className.split(' ')[1];
    });
    this.divElement2.nativeElement.appendChild(this.div);*/
  }

  ngAfterViewInit(): void {}
}
