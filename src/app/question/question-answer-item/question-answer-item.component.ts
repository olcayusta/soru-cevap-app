import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EmbeddedViewRef,
  ViewChild,
  ElementRef,
  ComponentFactoryResolver, ViewContainerRef, AfterViewInit, ɵmarkDirty as markDirty
} from '@angular/core';
import {Answer} from '../../shared/models/answer.model';
import {WebCopyCodeComponent} from '../web-copy-code/web-copy-code.component';

@Component({
  selector: 'app-question-answer-item',
  templateUrl: './question-answer-item.component.html',
  styleUrls: ['./question-answer-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class QuestionAnswerItemComponent implements OnInit, AfterViewInit {
  @Input() answer: Answer;

  @ViewChild('divElement') divElement: ElementRef<HTMLDivElement>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private vcr: ViewContainerRef
  ) {
  }

  ngAfterViewInit(): void {
 /*   this.divElement.nativeElement.querySelectorAll('pre')
      .forEach((block: HTMLElement) => {
        const factory = this.resolver.resolveComponentFactory(WebCopyCodeComponent);
        const compRef = this.vcr.createComponent<WebCopyCodeComponent>(factory);
        compRef.instance.text = block;

        const hostView = compRef.hostView as EmbeddedViewRef<any>;

        block.replaceWith(hostView.rootNodes[0]);


        compRef.changeDetectorRef.detectChanges();

      });*/
  }

  ngOnInit(): void {
  }

}
