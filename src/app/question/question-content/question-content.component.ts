import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component, ElementRef,
  Input, OnDestroy,
  OnInit, ViewChild,
  ViewEncapsulation
} from '@angular/core';

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
    this.divElement.nativeElement.querySelectorAll('pre code')
      .forEach((block: HTMLElement) => {
        const worker = new Worker('./highlight.worker', {type: 'module'});

        worker.onmessage = ({data}) => {
          const {language, value} = data;
          block.classList.add('hljs', language);
          block.innerHTML = value;
        };
        worker.postMessage(block.textContent);
      });
  }
}
