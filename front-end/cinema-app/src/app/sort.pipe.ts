import { Pipe, PipeTransform } from '@angular/core';
import { MovieScreening } from './movie-screening';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: MovieScreening[], ...args: unknown[]): MovieScreening[] {
    if(value){
      return value.sort((a: MovieScreening, b:MovieScreening) => {
        if(a.room < b.room){
          return -1;
        } else if (b.room< a.room){
          return 1;
        } 
        return 0;
        });
    }
    return [];
  }

}
