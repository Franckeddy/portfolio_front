import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Langue {
    name: string;
    level: string;
    candidat: string[];
}

@Injectable({ providedIn: 'root' })
export class LangueService {
    private languesUrl = 'api/langues';

    constructor(private http: HttpClient) { }

    getLangues(): Observable<Langue[]> {
        return this.http.get<Langue[]>(this.languesUrl);
    }
}