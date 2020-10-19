/// <reference lib="webworker" />

import { parse } from 'marked';

addEventListener('message', ({ data }) => {
  const response = parse(data);
  postMessage(response);
});
