
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { GraphQLResponse } from '../objects/graphql-response';


@Injectable()
export class LoginService {

  /* Inject the HTTP Client */
  constructor( private http: HttpClient) { }

  login(name: string, password: string) {
    return this.http.post<GraphQLResponse>('/query', {
      query: `{
        login(
          name: "${name}",
          password: "${password}"
        ){
          token
        }
      }`
    }).pipe(
      map( response => response.data.login)
    );
  }
}
