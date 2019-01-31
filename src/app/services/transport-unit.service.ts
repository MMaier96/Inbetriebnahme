import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TransportUnit } from '../objects/transport-unit';
import { GraphQLResponse } from '../objects/graphql-response';

const httpOptions = {
  headers: new HttpHeaders({
    'graphqlToken': 'D07F836626F301D9C482B264EA6BA11E1C79621A7FDBCD58E55F3001064DDCBCE06F37D1F0A0B6C07B75ACF7A6577080BF16A9774F2303410DEB59A566B042C4'
  })
};

@Injectable()
export class TransportUnitService {

  /* Inject the HTTP Client */
  constructor( private http: HttpClient) { }

  getAllTransportUnits(): Observable<TransportUnit[]> {
    return this.http.post<GraphQLResponse>('/query', {
      filter: 'HRA*',
      startIndex: 50,
      endIndex: 100,
      orderBy: 'transportUnits.location.name',
      ascending: true,
      query: `{
        transportUnits(testArg:"%", limit: 50)  {
          name
          location {
            name
          }
          type {
            name
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
