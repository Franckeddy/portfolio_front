import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ActivityArea {
    name: string,
    company: string[],
}

@Injectable({ providedIn: 'root' })
export class ActivityAreaService {
    private activity_areasUrl = 'api/activity-areas';

    constructor(private http: HttpClient) { }

    getActivityAreas(): Observable<ActivityArea[]> {
        return this.http.get<ActivityArea[]>(this.activity_areasUrl);
    }
}