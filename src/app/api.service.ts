import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL: string = 'http://http://localhost:82/';
  constructor(private httpClient: HttpClient) { 
  }
}

