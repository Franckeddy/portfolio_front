import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { School } from '../_models';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class SchoolService {

  // Base url
  baseurl = 'http://localhost:82/api/schools';

  constructor(private http: HttpClient) { }

  // Http Headers
    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:82/api/schools'
    })
  };

  // POST
  CreateSchool(data): Observable<School> {
    return this.http.post<School>(this.baseurl , JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // GET Single
  GetSchool(id): Observable<School> {
    return this.http.get<School>(this.baseurl + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // GET All
  GetSchools(): Observable<School> {
    return this.http.get<School>(this.baseurl)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // PUT
  UpdateSchool(id, data): Observable<School> {
    return this.http.put<School>(this.baseurl + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // DELETE
  DeleteSchool(id){
    return this.http.delete<School>(this.baseurl + id, this.httpOptions)
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
