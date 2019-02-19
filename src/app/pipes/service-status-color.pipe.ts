import { Pipe, PipeTransform } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';
import { ServiceRuntimeState } from '../objects/service-runtime-state';

@Pipe({
  name: 'serviceStatusColorPipe'
})
export class ServiceStatusColorPipe implements PipeTransform {

  transform(value: ServiceRuntimeState): string {
    console.log(ServiceRuntimeState.INITIALIZING);
    switch (value) {
      case ServiceRuntimeState.INITIALIZING: return 'green';
      case ServiceRuntimeState.NOT_RUNNING: return 'grey';
      case ServiceRuntimeState.RUNNING: return 'green';
      case ServiceRuntimeState.STARTING: return 'green';
      case ServiceRuntimeState.STOPPING: return 'red';
      case ServiceRuntimeState.UNKNOWN: return 'red';
    }
  }

}
