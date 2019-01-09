import { TransportUnit } from './../objects/TransportUnit';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

  const apiUrl = 'https://api.myjson.com/bins/tzwtc';

@Injectable()
export class TransportUnitService {

  constructor(
    private http: HttpClient
  ) { }

  getTransportUnits(): Observable<TransportUnit[]> {
    return this.http.get<TransportUnit[]>(apiUrl);
  }
}
