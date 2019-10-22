import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface School {
    name: string;
    start_date: Date;
    end_date: Date;
    candidat: string[];
    formation: string[];
}

@Injectable({ providedIn: 'root' })
export class SchoolService {
    private schoolsUrl = 'api/schools';

    constructor(private http: HttpClient) { }

    getSchools(): Observable<School[]> {
        return this.http.get<School[]>(this.schoolsUrl);
    }
}