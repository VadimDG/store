import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'splitWordByCapitalLetters'})
export class SplitWordByCapitalLettersPipe implements PipeTransform {
  transform(value: string): string {
    let res = '';
    for(let c of value) {
      if (c === c.toUpperCase()) {
        res += ` ${c}`;
        continue;
      }
      res += c;
    }
    return res;
  }
}