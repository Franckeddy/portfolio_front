import { Diplome } from '../_models/Diplome.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiplomeService {

// Base url
baseurl = 'http://localhost:82/api/diplomes';

constructor(private http: HttpClient) { }

// Http Headers
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:82/api/diplomes',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  })
};

// POST
CreateDiplome(data: any): Observable<Diplome> {
  return this.http.post<Diplome>(this.baseurl , JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
}

// GET Single
GetDiplome(id: string): Observable<Diplome> {
  return this.http.get<Diplome>(this.baseurl + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
}

// GET All
GetDiplomes(): Observable<Diplome> {
  return this.http.get<Diplome>(this.baseurl)
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
