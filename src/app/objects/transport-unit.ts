import {TransportUnitType} from './transport-unit-type';
import {TransportOrder} from './transport-order';
import {Location} from './location';


export interface TransportUnit {
  name: string;
  type: TransportUnitType;
  location: Location;
  activeTransportOrder: TransportOrder;
  transportOrders: TransportOrder[];
}
