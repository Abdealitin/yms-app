import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getRating',
})

// This pipe returns an array based on the rating
// if rating is 3.5 then [true, true, true,true, false]
export class GetRatingPipe implements PipeTransform {
  transform(value: number, ...args: any[]): Array<boolean> {
    let rating = [true, true, true, true, true];
    value = Math.round(value);

    for (let i = 0; i < 5; i++) {
      if (i < value) {
      } else {
        rating[i] = false;
      }
    }
    return rating;
  }
}
