import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Langue } from '../_models/Langue.model';

@Injectable({
  providedIn: 'root'
})
export class LangueService {

// Base url
baseurl = 'http://localhost:82/api/langues';

constructor(private http: HttpClient) { }

// Http Headers
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:82/api/langues',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  })
};

// POST
CreateLangue(data: any): Observable<Langue> {
  return this.http.post<Langue>(this.baseurl , JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
}

// GET Single
GetLangue(id: string): Observable<Langue> {
  return this.http.get<Langue>(this.baseurl + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
}

// GET All
GetLangues(): Observable<Langue> {
  return this.http.get<Langue>(this.baseurl)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
}

// DELETE
DeleteLangue(id: string){
  return this.http.delete<Langue>(this.baseurl + id, this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
}

// Error handling
errorHandl(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(errorMessage);
}

}
