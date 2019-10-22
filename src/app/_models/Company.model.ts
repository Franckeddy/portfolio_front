import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Company {
    name: string;
    start_date: Date;
    end_date: Date;
    candidat: string[];
    activityArea: string[];
}

@Injectable({ providedIn: 'root' })
export class CompanyService {
    private companiesUrl = 'api/companies';

    constructor(private http: HttpClient) { }

    getCompanies(): Observable<Company[]> {
        return this.http.get<Company[]>(this.companiesUrl);
    }
}