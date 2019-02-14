import { Pipe, PipeTransform } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Pipe({
  name: 'serviceStatusColorPipe'
})
export class ServiceStatusColorPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'running': return 'green';
      case 'error': return 'red';
      case 'warning': return 'orange';
      case 'stopped': return 'grey';
      default: return 'grey';
    }
  }

}
