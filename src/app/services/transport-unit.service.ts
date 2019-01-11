import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TransportUnit } from '../objects/TransportUnit';

/* Static for now -> TODO: make dynamic in the future */
const apiUrl = 'https://api.myjson.com/bins/mu3y8';

@Injectable()
export class TransportUnitService {

  /* Inject the HTTP Client */
  constructor( private http: HttpClient) { }

  /* Query for all available TransportUnits */
  getAllTransportUnits(): Observable<TransportUnit[]> {
    return this.http.get<TransportUnit[]>(apiUrl);
  }

  /* Provide more TransportUnits provider */
}
