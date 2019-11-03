import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Company } from '../_models/Company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

// Base url
baseurl = 'http://localhost:82/api/companies';

constructor(private http: HttpClient) { }

// Http Headers
  httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:82/api/companies',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
  })
};

// POST
CreateCompany(data: any): Observable<Company> {
  return this.http.post<Company>(this.baseurl , JSON.stringify(data), this.httpOptions)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
}

// GET Single
GetCompany(id: string): Observable<Company> {
  return this.http.get<Company>(this.baseurl + id)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
}

// GET All
GetCompanies(): Observable<Company> {
  return this.http.get<Company>(this.baseurl)
    .pipe(
      retry(1),
      catchError(this.errorHandl)
    )
}

// DELETE
DeleteCompany(id: string){
  return this.http.delete<Company>(this.baseurl + id, this.httpOptions)
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
