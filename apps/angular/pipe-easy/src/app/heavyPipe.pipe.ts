import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'heavyPipe',
  standalone: true,
})
export class HeavyPipe implements PipeTransform {
  transform(value: string, index: number): string {
    return `${value} - ${index}`;
  }
}
