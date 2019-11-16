import { Formation } from './Formation.model';

export interface School {
    // media: string;
    name: string,
    // start_date: string,
    // end_date: string,
    // candidat: string[];
    formations: Array<Formation>;
}  