import { CreateTOData } from './../dialogs/transport-order/actions/createTO/create-to-action';
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
          filter: {
            entries: {
              searchKey: "transportUnit.name",
              operator: EQUALS,
              values: "%` + filter + `%"
            }
          },
          paging: {
            start: ` + environment.defaultPageSize * pageIndex + `,
            offset:  ` + environment.defaultPageSize + `
          }
        ) {
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
      map( response => response.data.transportOrderCount as number)
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
              values: %` + value + `%
            }
          }
        ) {
          id
          createdOnLocation {
            name
          }
          waitingFor
          priority
          type
          targets {
            name
          }
          age
          finished
      }
    }`
    }, this.tokenService.getHttpOptions()).pipe(
      map( response => response.data.transportOrders as TransportOrder)
    );
  }


  createTransportOrder(data: CreateTOData) {
    return this.http.post<GraphQLResponse>('/query', {
      query: `mutation{
        createTransportOrder(
          reason: "` + data.reason + `"
          tuName: "` + data.tuName + `"
          transportOrderType: ` + data.transportOrderType + `
          target: "` + data.target + `"
        )
      }`
    }, this.tokenService.getHttpOptions()).pipe(
      map( response => response.data.createTransportOrder)
    );
  }
}
