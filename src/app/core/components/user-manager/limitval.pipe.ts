import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitval'
})
export class LimitvalPipe implements PipeTransform {

  transform(value: any, limit: number): unknown {
    if(value.length > limit){
      return value.substr(0, limit) + "...";
    }
    return value;
  }

}
