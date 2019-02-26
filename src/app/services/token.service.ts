import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class TokenService {
  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'graphqlToken': sessionStorage.getItem('graphql-token')
      })
    };
  }
}
