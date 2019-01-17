import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GraphQLTransportUnit } from 'src/app/objects/graphql-objects/graphql-transport-unit';

/* Static for now -> TODO: make dynamic in the future */
const apiUrl = 'https://api.myjson.com/bins/mu3y8';

@Injectable()
export class GraphQLTransportUnitService {

  /* Inject the HTTP Client */
  constructor( private http: HttpClient) { }

  /* Query for all available TransportUnits */
  getAllTransportUnits(): Observable<GraphQLTransportUnit[]> {
    return this.http.get<GraphQLTransportUnit[]>(apiUrl);
  }
}
