import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GraphQLResponse } from '../objects/graphql-response';
import { TransportOrder } from '../objects/transport-order';

const httpOptions = {
  headers: new HttpHeaders({
    'graphqlToken': '77ABF258B428C813D3FE91C737F3089AAEB9814931D6EF3DA2AA01AEB10A6A77C5407A73AB75B6A6A562B0E64A53D3957D36396766FF52DC2586877D4D97D4E7'
  })
};

@Injectable()
export class TransportOrderService {

  /* Inject the HTTP Client */
  constructor( private http: HttpClient) { }

  getAllTransportOrders(filter?: string): Observable<TransportOrder[]> {
    filter = filter || '';
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        transportOrders {
          active
          currentLocation {
            name
          }
          error
          nextTarget {
            name
          }
          transportUnitName
        }
      }`
    }, httpOptions).pipe(
      map( response => response.data.transportOrders as TransportOrder[])
    );
  }

  getAllTransportOrdersCount(filter?: string): Observable<number> {
    filter = filter || '';
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        transportUnitsCount(name:"%` + filter + `%")
      }`
    }, httpOptions).pipe(
      map( response => response.data.transportUnitsCount)
    );
  }

  getTransportOrderByName(tuName: string) {
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        transportUnits(
        offset: 1,
        name: "` + tuName + `",
        first: 0
      ) {
        cubature {
          height
          length
          weight
        }
        empty
        emptyStack
        errorCodes
        hasActiveTo
        id
        lastDc2AmMovementBookingReason
        lastLocationBookingTime
        locationLabel
        name
        routingPoint
        socOrderInfo
        superTu {
          id
        }
        type {
          id
        }
        weight
      }
    }`
    }, httpOptions).pipe(
      map( response => response.data.transportUnits)
    );
  }
}
