import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransportUnit } from '../objects/transport-unit';
import { GraphQLResponse } from '../objects/graphql-response';
import { environment } from 'src/environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({
    'graphqlToken': '77ABF258B428C813D3FE91C737F3089AAEB9814931D6EF3DA2AA01AEB10A6A77C5407A73AB75B6A6A562B0E64A53D3957D36396766FF52DC2586877D4D97D4E7'
  })
};
const pageSize = environment.defaultPageSize;

@Injectable()
export class TransportUnitService {

  /* Inject the HTTP Client */
  constructor( private http: HttpClient) { }

  getTransportUnitsForPage(filter: string, pageIndex: number): Observable<TransportUnit[]> {
    filter = filter || '';
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        transportUnits(
          filter: {
            entries: {
              searchKey: "name",
              operator: EQUALS,
              values: "%` + filter + `%"
            }
          },
          paging: {
            start: ` + pageSize * pageIndex + `,
            offset:  ` + pageSize + `
          }
        ) {
        name
        type {
          name
        }
        locationLabel
        hasActiveTo
        errorCodes
      }
    }`
    }, httpOptions).pipe(
      map( response => response.data.transportUnits)
    );
  }

  getAllTransportUnitsCount(filter?: string): Observable<number> {
    filter = filter || '';
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        transportUnitCount(
          filter: {
            entries: {
              searchKey: "name",
              operator: EQUALS,
              values: "%` + filter + `%"
            }
          }
        )
      }`
    }, httpOptions).pipe(
      map( response => response.data.transportUnitCount)
    );
  }

  getTransportUnitByName(tuName: string) {
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        transportUnits(
          filter: {
            entries: {
              searchKey: "name",
              operator: EQUALS,
              values: "%` + tuName + `%"
            }
          },
          paging: {
            start: 0,
            offset: ` + pageSize + `
          }
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
