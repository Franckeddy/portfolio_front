import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// TODO change type

export interface Candidat {
  media: string;
  firstname: string,
  lastname: string,
  adress: string,
  town: string,
  zipcode: string,
  email: string,
  date_of_birth: string,
  langues: string[];
  licenses: string[];
  schools: string[];
  companies: string[];
}

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productsUrl = 'api/candidats';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.productsUrl);
  }
}