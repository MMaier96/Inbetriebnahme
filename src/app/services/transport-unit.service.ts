import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransportUnit } from '../objects/transport-unit';
import { GraphQLResponse } from '../objects/graphql-response';

@Injectable()
export class TransportUnitService {

  /* Inject the HTTP Client */
  constructor( private http: HttpClient) { }

  getAllTransportUnits(): Observable<TransportUnit[]> {
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        tu{
          name
          location
          routingPoint
        }
      }`
    }).pipe(
      map( response => response.data.tu)
    );
  }
}
