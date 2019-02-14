import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransportUnit } from '../objects/transport-unit';
import { GraphQLResponse } from '../objects/graphql-response';

const httpOptions = {
  headers: new HttpHeaders({
    'graphqlToken': '77ABF258B428C813D3FE91C737F3089AAEB9814931D6EF3DA2AA01AEB10A6A77C5407A73AB75B6A6A562B0E64A53D3957D36396766FF52DC2586877D4D97D4E7'
  })
};

@Injectable()
export class TransportUnitService {

  /* Inject the HTTP Client */
  constructor( private http: HttpClient) { }

  getAllTransportUnits(filter?: string): Observable<TransportUnit[]> {
    filter = filter || '';
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        transportUnits(
        offset: 50,
        name: "%` + filter + `%",
        first: 0
      ) {
        id
        name
        type {
          name
        }
        location{
          name
        }
        transportOrders {
          error
        }
        activeTransportOrder {
          isActive
        }
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
        transportUnitsCount(name:"%` + filter + `%")
      }`
    }, httpOptions).pipe(
      map( response => response.data.transportUnitsCount)
    );
  }

  getTransportUnitByName(tuName: string) {
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        transportUnits(
        offset: 1,
        name: "` + tuName + `",
        first: 0
      ) {
        id
        name
        type {
          id
          name
          typeSocId
        }
        location{
          id
          name
          hostName
          description
        }
        transportOrders {
          id
          nextTarget {
            name
          }
          isActive
          error
        }
        activeTransportOrder {
          isActive
        }
      }
    }`
    }, httpOptions).pipe(
      map( response => response.data.transportUnits)
    );
  }
}
