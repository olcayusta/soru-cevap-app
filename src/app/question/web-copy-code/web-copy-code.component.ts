import {Component, OnInit, ChangeDetectionStrategy, AfterViewInit, ChangeDetectorRef, ɵmarkDirty as markDirty} from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';

@Component({
  selector: 'app-web-copy-code',
  templateUrl: './web-copy-code.component.html',
  styleUrls: ['./web-copy-code.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WebCopyCodeComponent implements OnInit, AfterViewInit {
  text: HTMLElement;
  lang: string;

  constructor(
    private cdr: ChangeDetectorRef,
    private clipboard: Clipboard
  ) {
  }

  copyCode(): void {
    this.clipboard.copy(this.text.textContent);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    markDirty(this);
  }
}
