import { Service } from './../objects/service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GraphQLResponse } from '../objects/graphql-response';

const httpOptions = {
  headers: new HttpHeaders({
    'graphqlToken': '77ABF258B428C813D3FE91C737F3089AAEB9814931D6EF3DA2AA01AEB10A6A77C5407A73AB75B6A6A562B0E64A53D3957D36396766FF52DC2586877D4D97D4E7'
  })
};

@Injectable()
export class ServicesService {

  /* Inject the HTTP Client */
  constructor( private http: HttpClient) { }

  getAllServices(): Observable<Service[]> {
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        serviceStates {
          daemonState
          lastStart
          lastStop
          name
          runtimeState
        }
      }`
    }, httpOptions).pipe(
      map( response => response.data.serviceStates)
    );
  }
}
