import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency2'
})
export class Currency2Pipe implements PipeTransform {

  transform(value: string, args?: any[]): number {
    if (value === 'cu'){
      return 11;
    } else if(value === 'kz'){
      return (430 * 11);
    }
  }

}
