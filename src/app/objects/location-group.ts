import { Location } from './location';

export interface LocationGroup {
  name: string;
  hostName: string;
  locations: Location[];
  hasLocks: boolean;
}
