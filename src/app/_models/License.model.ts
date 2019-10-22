import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface License {
    name: string;
    date_obtention: Date;
    candidat: string[];
}

@Injectable({ providedIn: 'root' })
export class LicenseService {
    private licensesUrl = 'api/licenses';

    constructor(private http: HttpClient) { }

    getLicenses(): Observable<License[]> {
    return this.http.get<License[]>(this.licensesUrl);
    }
}