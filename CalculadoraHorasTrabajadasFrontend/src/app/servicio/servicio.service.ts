import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Servicio } from './servicio.model';

const baseUrl = environment.url + "/servicio";
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  
  constructor(
    private http: HttpClient) { }

  getAll(): Observable<Servicio[]> {
    return this.http.get<Servicio[]>(baseUrl + '/all')
    .pipe(
      catchError(this.handleError<Servicio[]>(baseUrl + '/all', []))
    );
  }

  add(servicio: Servicio) {
    return this.http.post<Servicio>(baseUrl + '/add', servicio)
    .pipe(
      catchError(this.handleError<Servicio>('addServicio'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
