import {Deserializable} from './deserializable.model';

export class Diplome implements Deserializable{
    // media: string;
    name: string;
    // date_obtention: string,

  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
