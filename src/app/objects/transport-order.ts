import { TransportOrderTarget } from './transport-order-target';
import { TransportOrderType } from './transport-order.type';
import { TransportOrderError } from './transport-order-error';

export interface TransportOrder {
  name: string;
  type: TransportOrderType;
  isActive: boolean;
  error: TransportOrderError;
  nextTarget: TransportOrderTarget;
  targets: TransportOrderTarget[];
}
