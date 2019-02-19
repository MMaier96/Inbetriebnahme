import { ExceptionData } from './exception-data';
import { ServiceRuntimeState } from './service-runtime-state';

export interface Service {
  daemonState: string;
  lastException: ExceptionData;
  lastStart: number;
  lastStop: number;
  name: String;
  runtimeState: ServiceRuntimeState;
}
