import { LocationGroup } from './location-group';

export interface Location {
  compartmentRegion: string;
  description: string;
  hostName: string;
  id: number;
  locationGroups: LocationGroup[];
  locked: boolean;
  name: string;
  routingPoint: string;
  socName: string;
  storageLocation: boolean;
}
