/// <reference lib="webworker" />

import hljs from 'highlight.js/lib/core';

import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);

addEventListener('message', ({ data }) => {
  const {language, value} = hljs.highlightAuto(data);
  postMessage({
    language, value
  });
});
