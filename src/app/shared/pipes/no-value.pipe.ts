import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noValue',
})
export class NoValuePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return value ? value : 'Information currently unavailable!';
  }
}
