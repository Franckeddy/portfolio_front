import { Diplome } from './Diplome.model';

export interface Formation {
    name: string,
    // start_date: Date,
    // end_date: Date,
    // school: string[],
    diplomes: Array<Diplome>;
}