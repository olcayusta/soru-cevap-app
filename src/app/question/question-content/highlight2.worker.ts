/// <reference lib="webworker" />

import hljs from 'highlight.js/lib/core';

import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import css from 'highlight.js/lib/languages/css';
import sql from 'highlight.js/lib/languages/sql';

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('sql', sql);

addEventListener('message', ({ data }) => {
  const {text, lang} = data;
  if (lang) {
    const {language, value} = hljs.highlight(lang, text);
    postMessage({
      language, value
    });
  } else {
    const {language, value} = hljs.highlightAuto(data, ['javascript', 'typescript']);
    console.log(language)
    postMessage({
      language, value
    });
  }

  self.close();
});
