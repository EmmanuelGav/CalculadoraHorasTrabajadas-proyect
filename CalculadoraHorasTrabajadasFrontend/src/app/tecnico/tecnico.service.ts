import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Tecnico } from './tecnico.model';

const baseUrl = environment.url + "/tecnico";
@Injectable({
  providedIn: 'root'
})
export class TecnicoService {
  
  constructor(
    private http: HttpClient) { }

  getAll(): Observable<Tecnico[]> {
    return this.http.get<Tecnico[]>(baseUrl + '/all')
    .pipe(
      catchError(this.handleError<Tecnico[]>(baseUrl + '/all', []))
    );
  }

  add(tecnico: Tecnico) {
    return this.http.post<Tecnico>(baseUrl + '/add', tecnico)
    .pipe(
      catchError(this.handleError<Tecnico>('addTecnico'))
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
