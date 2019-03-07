import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransportUnit } from '../objects/transport-unit';
import { GraphQLResponse } from '../objects/graphql-response';
import { environment } from 'src/environments/environment';
import { GraphQLService } from './graphql.service';
import { TokenService } from './token.service';


@Injectable()
export class TransportUnitService implements GraphQLService<TransportUnit> {

  /* Inject the HTTP Client */
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  getObjectsForPage(filter: string, pageIndex: number): Observable<TransportUnit[]> {
    filter = filter || '';
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        transportUnits(
          filter: {
            entries: {
              searchKey: "name",
              operator: EQUALS,
              values: "%${filter}%"
            }
          },
          paging: {
            start: ${environment.defaultPageSize * pageIndex},
            offset:  ${environment.defaultPageSize}
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
    }, this.tokenService.getHttpOptions()).pipe(
      map( response => response.data.transportUnits)
    );
  }

  getObjectsCount(): Observable<number> {
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        transportUnitCount
      }`
    }, this.tokenService.getHttpOptions()).pipe(
      map( response => response.data.transportUnitCount as number)
    );
  }

  getObjectByProperty(propertyName: string, value: string): Observable<TransportUnit> {
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        transportUnits(
          filter: {
            entries: {
              searchKey: "${propertyName}",
              operator: EQUALS,
              values: "%${value}%"
            }
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
    }, this.tokenService.getHttpOptions()).pipe(
      map( response => response.data.transportUnits as TransportUnit)
    );
  }
}
