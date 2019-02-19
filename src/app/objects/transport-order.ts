import { TransportOrderTarget } from './transport-order-target';
import { TransportOrderError } from './transport-order-error';

export interface TransportOrder {
  active: boolean;
  age: number;
  createdOnLocation: Location;
  currentLocation: Location;
  error: TransportOrderError;
  errorReason: String;
  finished: boolean;
  id: number;
  locationFoundByStorageSearch: String;
  nextTarget: Location;
  priority: number;
  targets: TransportOrderTarget[];
  transportUnitName: string;
  type: string;
  waitingFor: string;
}
