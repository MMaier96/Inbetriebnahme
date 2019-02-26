import { Service } from './../objects/service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GraphQLResponse } from '../objects/graphql-response';
import { TokenService } from './token.service';


@Injectable()
export class ServicesService {

  /* Inject the HTTP Client */
  constructor(
    private http: HttpClient,
    private tokenService: TokenService
  ) { }

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
    }, this.tokenService.getHttpOptions()).pipe(
      map( response => response.data.serviceStates)
    );
  }
}
