import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Formation {
    name: string,
    start_date: Date,
    end_date: Date,
    school: string[],
    diplomes: string[],
}

@Injectable({ providedIn: 'root' })
export class FormationService {
    private formationsUrl = 'api/formations';

    constructor(private http: HttpClient) { }

    getFormations(): Observable<Formation[]> {
        return this.http.get<Formation[]>(this.formationsUrl);
    }
}