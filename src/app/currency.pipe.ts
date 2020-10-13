import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: string, args?: any[]): number {
    if (value === 'cu'){
      return 9 ;
    } else if (value === 'kz'){
      return (430 * 9);
    }
  }

}
