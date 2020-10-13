import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency3'
})
export class Currency3Pipe implements PipeTransform {

  transform(value: string, args?: any[]): number {
    if (value === 'cu'){
      return 10;
    } else if(value === 'kz'){
      return (430 * 10);
    }
  }

}
