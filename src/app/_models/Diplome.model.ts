import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Diplome {
    name: string,
    level: string,
    date_obtention: Date,
    formation: string[],
}

@Injectable({ providedIn: 'root' })
export class DiplomeService {
    private diplomesUrl = 'api/diplomes';

    constructor(private http: HttpClient) { }

    getDiplomes(): Observable<Diplome[]> {
        return this.http.get<Diplome[]>(this.diplomesUrl);
    }
}