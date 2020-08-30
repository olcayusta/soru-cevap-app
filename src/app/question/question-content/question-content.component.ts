import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, ElementRef,
  Inject,
  Input,
  OnInit, ViewChild,
  ViewEncapsulation
} from '@angular/core';

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

@Component({
  selector: 'qa-question-content',
  templateUrl: './question-content.component.html',
  styleUrls: ['./question-content.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class QuestionContentComponent implements OnInit, AfterViewInit {
  @Input() content: string;
  @ViewChild('divElement') divElement: ElementRef<HTMLDivElement>;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.divElement.nativeElement.querySelectorAll('pre code').forEach((block: HTMLElement) => {
      hljs.highlightBlock(block);
    });
  }
}
