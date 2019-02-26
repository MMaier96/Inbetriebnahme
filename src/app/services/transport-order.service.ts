import { environment } from './../../environments/environment';
import { GraphQLService } from './graphql.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GraphQLResponse } from '../objects/graphql-response';
import { TransportOrder } from '../objects/transport-order';
import { TokenService } from './token.service';


@Injectable()
export class TransportOrderService implements GraphQLService<TransportOrder> {

  /* Inject the HTTP Client */
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  getObjectsForPage(filter: string, pageIndex: number): Observable<TransportOrder[]> {
    filter = filter || '';
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        transportOrders (
          paging: {
            start: ` + environment.defaultPageSize * pageIndex + `,
            offset:  ` + environment.defaultPageSize + `
          }
        ) {
          id
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
    }, this.tokenService.getHttpOptions()).pipe(
      map( response => response.data.transportOrders as TransportOrder[])
    );
  }

  getObjectsCount(): Observable<number> {
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        transportOrderCount
      }`
    }, this.tokenService.getHttpOptions()).pipe(
      map( response => response.data.transportUnitsCount as number)
    );
  }

  getObjectByProperty(propertyName: string, value: string): Observable<TransportOrder> {
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        transportOrders(
          filter: {
            entries: {
              searchKey: "` + propertyName + `",
              operator: EQUALS,
              values: ` + +value + `
            }
          }
        ) {
          id
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
    }, this.tokenService.getHttpOptions()).pipe(
      map( response => response.data.transportOrders as TransportOrder)
    );
  }
}
