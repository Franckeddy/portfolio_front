import { Deserializable } from './deserializable.model';

export class Langue implements Deserializable {
    name: string;
    level: string;
    // candidat: string[];

    deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
