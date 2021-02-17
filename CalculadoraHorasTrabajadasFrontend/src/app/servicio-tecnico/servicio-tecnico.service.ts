import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ServicioTecnico } from './servicio-tecnico.model';

const baseUrl = environment.url + "/servicioTecnico";
@Injectable({
  providedIn: 'root'
})
export class ServicioTecnicoService {
  
  constructor(
    private http: HttpClient) { }

  getAll(): Observable<ServicioTecnico[]> {
    return this.http.get<ServicioTecnico[]>(baseUrl + '/all')
    .pipe(
      catchError(this.handleError<ServicioTecnico[]>(baseUrl + '/all', []))
    );
  }

  add(servicioTecnico: ServicioTecnico) {
    return this.http.post<ServicioTecnico>(baseUrl + '/add', servicioTecnico)
    .pipe(
      catchError(this.handleError<ServicioTecnico>('addServicioTecnico'))
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
