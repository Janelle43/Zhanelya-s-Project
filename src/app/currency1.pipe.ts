import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency1'
})
export class Currency1Pipe implements PipeTransform {

  transform(value: string, args?: any[]): number {
    if (value === 'cu'){
      return 7;
    } else if (value === 'kz'){
      return (430 * 7);
    }
  }

}
