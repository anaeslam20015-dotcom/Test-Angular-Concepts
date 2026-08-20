import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipes',
  standalone: true,
})
export class CustomPipe implements PipeTransform {
  transform(value: string, start: number, end: number): string {
    return value.slice(start, end);
  }
}
