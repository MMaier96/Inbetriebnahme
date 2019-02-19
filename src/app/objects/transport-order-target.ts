import { TransportOrder } from './transport-order';
import { LocationGroup } from './location-group';
import { Location } from './location';

export interface TransportOrderTarget {
  finished: boolean;
  id: number;
  location: Location;
  locationGroup: LocationGroup;
  name: string;
  transportOrder: TransportOrder;
}
