import { Deserializable } from './deserializable.model';
import { Formation } from './Formation.model';

export class School implements Deserializable{
    // media: string;
    name: string;
    // start_date: string,
    // end_date: string,
    // candidat: string[];
    formations: Formation;

    deserialize(input: any): this {
      Object.assign(this, input);
      this.formations = new Formation().deserialize(input.formations);
      return this;
  }
}
