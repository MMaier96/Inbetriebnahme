import { GraphQLService } from './graphql.service';
import { Location } from './../objects/location';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GraphQLResponse } from '../objects/graphql-response';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';


@Injectable()
export class LocationService implements GraphQLService<Location> {

  /* Inject the HTTP Client */
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  getObjectsForPage(filter: string, pageIndex: number): Observable<Location[]> {
    filter = filter || '';
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        locations(
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
          storageLocation
          hostName
          socName
          locked
        }
      }`
    }, this.tokenService.getHttpOptions()).pipe(
      map( response => response.data.locations as Location[])
    );
  }

  getObjectsCount(): Observable<number> {
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        locationCount
      }`
    }, this.tokenService.getHttpOptions()).pipe(
      map( response => response.data.locationCount as number)
    );
  }

  getObjectByProperty(propertyName: string, value: string) {
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        locations(
          filter: {
            entries: {
              searchKey: "${propertyName}",
              operator: EQUALS,
              values: "%${value}%"
            }
          }
        ) {
          routingPoint
          compartmentRegion
          description
          locationGroups {
            name
          }
      }
    }`
    }, this.tokenService.getHttpOptions()).pipe(
      map( response => response.data.locations as Location)
    );
  }
}
