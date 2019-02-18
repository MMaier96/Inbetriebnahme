import {TransportUnitType} from './transport-unit-type';
import { TransportUnitCubature } from './transport-unit-cubature';

/* TODO: Maybe make explicit enum fields instead of strings */
export interface TransportUnit {
  cubature: TransportUnitCubature;
  empty: boolean;
  emptyStack: boolean;
  errorCodes: string;
  hasActiveTo: boolean;
  id: number;
  lastDc2AmMovementBookingReason: string;
  lastLocationBookingTime: string;
  locationLabel: string;
  name: string;
  routingPoint: string;
  socOrderInfo: string;
  superTu: TransportUnit;
  type: TransportUnitType;
  weight: number;
}
