import { Directive } from '@angular/core';

// @ts-ignore
import hljs from 'highlight.js/lib/core';

// @ts-ignore
import javascript from 'highlight.js/lib/languages/javascript';
// @ts-ignore
import typescript from 'highlight.js/lib/languages/typescript';
// @ts-ignore
import css from 'highlight.js/lib/languages/css';
// @ts-ignore
import sql from 'highlight.js/lib/languages/sql';
// @ts-ignore
import php from 'highlight.js/lib/languages/php';
// @ts-ignore
import xml from 'highlight.js/lib/languages/xml';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
hljs.registerLanguage('css', css);
hljs.registerLanguage('php', php);
hljs.registerLanguage('sql', sql);

hljs.configure({
  languages: ['javascript', 'typescript', 'sql', 'xml', 'css', 'php'],
});

@Directive({
  selector: '[appCodeHighlight]',
})
export class CodeHighlightDirective {
  constructor() {}
}
