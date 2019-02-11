import { Pipe, PipeTransform } from '@angular/core';
import { TransportOrder } from '../objects/transport-order';

@Pipe({
  name: 'hasAnyToError'
})
export class HasAnyToErrorPipe implements PipeTransform {

  transform(tos: TransportOrder[], args?: any): any {
    for (const to of tos) {
      if (to.error) {
        return true;
      }
    }
    return false;
  }

}
