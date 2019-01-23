import { TransportOrder } from './transport-order';
import { LocationGroup } from './location-group';
import { Location } from './location';

export interface TransportOrderTarget {
  transportOrder: TransportOrder;
  location: Location;
  locationGroup: LocationGroup;
}
