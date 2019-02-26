
import { Observable } from 'rxjs';

export interface GraphQLService<T> {
  getObjectsForPage(filter: string, pageIndex: number): Observable<T[]>;

  getObjectsCount(): Observable<number>;

  getObjectByProperty(propertyName: string, value: string): Observable<T>;
}
