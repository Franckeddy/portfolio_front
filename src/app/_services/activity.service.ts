import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { ActivityArea } from '../_models/ActivityArea.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  // Base url
  baseurl = 'http://localhost:82/api/activities';

  constructor(private http: HttpClient) { }

  // Http Headers
    httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:82/api/activities',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
    })
  };

  // POST
  CreateActivity(data: any): Observable<ActivityArea> {
    return this.http.post<ActivityArea>(this.baseurl , JSON.stringify(data), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // GET Single
  GetActivity(id: string): Observable<ActivityArea> {
    return this.http.get<ActivityArea>(this.baseurl + id)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

  // GET All
  GetActivities(): Observable<ActivityArea> {
    return this.http.get<ActivityArea>(this.baseurl)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      )
  }

    // DELETE
    DeleteActivity(id: string){
      return this.http.delete<ActivityArea>(this.baseurl + '/' + id, this.httpOptions)
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
