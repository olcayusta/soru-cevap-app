import { Injectable } from '@angular/core';
import {parse} from 'marked';

@Injectable({
  providedIn: 'root'
})
export class MarkedService {

  constructor() { }

  setMarked(text: string): void {
    parse(text, (error, parseResult) => {
      console.log(parseResult);
    });
  }
}
