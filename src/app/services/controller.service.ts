import { TokenService } from './token.service';
import { Controller } from './../objects/controller';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GraphQLResponse } from '../objects/graphql-response';
import { GraphQLService } from './graphql.service';


@Injectable()
export class ControllerService implements GraphQLService<Controller> {

  /* Inject the HTTP Client */
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

  getObjectsForPage(filter: string, pageIndex: number): Observable<Controller[]> {
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        deviceControllerStates {
          name
          available
          runtimeState
        }
    }`
    }, this.tokenService.getHttpOptions()).pipe(
      map( response => response.data.deviceControllerStates)
    );
  }

  getObjectsCount(): Observable<number> {
    return null;
  }

  getObjectByProperty(propertyName: string, value: string): Observable<Controller> {
    return null;
  }
}
