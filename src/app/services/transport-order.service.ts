import { GraphQLResponse } from './../objects/graphql-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransportOrder } from '../objects/transport-order';

@Injectable()
export class TransportOrderService {

  /* Inject the HTTP Client */
  constructor( private http: HttpClient) { }

  getAllTransportOrders(): Observable<TransportOrder[]> {
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        transportOrders{
          tu {
            location
            name
            routingPoint
          }
          targets {
            name
          }
          isActive
          error
        }
      }`
    }).pipe(
      map( response => response.data.transportOrders)
    );
  }
}
