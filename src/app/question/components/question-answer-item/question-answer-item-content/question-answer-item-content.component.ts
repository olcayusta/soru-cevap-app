import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ViewChild,
  ElementRef,
  AfterViewInit,
  EmbeddedViewRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ChangeDetectorRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { WebCopyCodeComponent } from '../../../web-copy-code/web-copy-code.component';

@Component({
  selector: 'id-question-answer-item-content',
  templateUrl: './question-answer-item-content.component.html',
  styleUrls: ['./question-answer-item-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionAnswerItemContentComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() content!: string;
  @ViewChild('divElement') divElement!: ElementRef<HTMLDivElement>;

  constructor(private resolver: ComponentFactoryResolver, private vcr: ViewContainerRef, private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.divElement.nativeElement.querySelectorAll('pre').forEach((block: HTMLElement) => {
      const factory = this.resolver.resolveComponentFactory(WebCopyCodeComponent);

      const compRef = this.vcr.createComponent<WebCopyCodeComponent>(factory);
      compRef.instance.text = block;

      const hostView = compRef.hostView as EmbeddedViewRef<any>;

      block.replaceWith(hostView.rootNodes[0]);
    });
  }
}
