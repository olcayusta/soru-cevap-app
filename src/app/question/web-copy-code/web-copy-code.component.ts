import {Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'id-web-copy-code',
  templateUrl: './web-copy-code.component.html',
  styleUrls: ['./web-copy-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebCopyCodeComponent implements OnInit, AfterViewInit, OnChanges {
  text: HTMLPreElement | HTMLElement = null;
  lang: string;

  constructor(private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  ngAfterViewInit(): void {
    /*    const worker = new Worker('./highlight.worker', {type: 'module'});

        worker.onmessage = ({data}) => {
          const {language, value} = data;
          this.lang = language;
          this.highlightedCode = value;
          markDirty(this);
        };
        const codeClassName = this.text.querySelector('code').className;
        if (codeClassName) {
          worker.postMessage({
            text: this.text.textContent,
            lang: codeClassName.split('-')[1]
          });
        } else {
          worker.postMessage({
            text: this.text.textContent
          });
        }*/

  }
}
