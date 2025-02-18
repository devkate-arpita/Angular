import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining'
})
export class RemainingPipe implements PipeTransform {

  transform(value: string): boolean {
   
    return value.length >= 5; // Disable if length is greater than 5
  }
}
