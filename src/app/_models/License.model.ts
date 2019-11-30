import { Deserializable } from './deserializable.model';

export class License implements Deserializable{
    // media: string;
    name: string;
    // date_obtention: string,
    // candidat: string[];

    deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
