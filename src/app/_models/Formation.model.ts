import {Deserializable} from './deserializable.model';
import { Diplome } from './Diplome.model';

export class Formation implements Deserializable{
    name: string;
    // start_date: Date,
    // end_date: Date,
    // school: string[],
    diplomes: Diplome;

  deserialize(input: any): this {
    Object.assign(this, input);
    this.diplomes = new Diplome().deserialize(input.diplomes);
    return this;
  }
}
