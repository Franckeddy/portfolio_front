import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Candidat } from '../_models';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CandidatService {

  // Base url
  baseurl = 'http://localhost:82/api/candidats';

  constructor(private http: HttpClient) { }

  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:82/api/candidats'
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
    })
  };

  // POST
  CreateCandidat(data): Observable<Candidat> {
    return this.http.post<Candidat>(this.baseurl , JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // GET
  GetCandidat(id): Observable<Candidat> {
    return this.http.get<Candidat>(this.baseurl + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // GET
  GetCandidats(): Observable<Candidat> {
    return this.http.get<Candidat>(this.baseurl)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // PUT
  UpdateCandidat(id, data): Observable<Candidat> {
    return this.http.put<Candidat>(this.baseurl + id, JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // DELETE
  DeleteCandidat(id){
    return this.http.delete<Candidat>(this.baseurl + id, this.httpOptions)
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
