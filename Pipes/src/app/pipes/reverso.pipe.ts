import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverso'
})
export class ReversoPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    const arrValue = value.split('');
    const arrReverso = arrValue.reverse();
    return arrReverso.join('');
  }

}
