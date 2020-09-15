import { Component, OnInit, ChangeDetectionStrategy, ɵmarkDirty as markDirty, AfterViewInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'qa-web-copy-code',
  templateUrl: './web-copy-code.component.html',
  styleUrls: ['./web-copy-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebCopyCodeComponent implements OnInit, AfterViewInit {
  text: HTMLPreElement | HTMLElement;
  lang: string;
  highlightedCode;

  constructor(
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const worker = new Worker('./highlight.worker', {type: 'module'});

    worker.onmessage = ({data}) => {
      const {language, value} = data;
      this.lang = language;
      this.highlightedCode = value;
      console.log(this.highlightedCode);
      markDirty(this)
    };
    worker.postMessage(this.text.textContent);
  }

  onCopiedCode(): void {
    /*this.snackBar.open('Kod kopyalandı', '', {
      duration: 4000
    });*/
  }
}
