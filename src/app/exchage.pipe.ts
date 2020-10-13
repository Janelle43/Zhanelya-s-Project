import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exchage'
})
export class ExchagePipe implements PipeTransform {

  transform(value: string, args?: any[]): string {
    if(value === 'kz'){
      return 'KZT';
    } else{
      return 'USD';
    }
  }

}
