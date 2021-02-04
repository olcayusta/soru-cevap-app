import { Pipe, PipeTransform } from '@angular/core';
import { parse } from 'marked';

@Pipe({
  name: 'marked'
})
export class MarkedPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    return parse(value);
  }
}
