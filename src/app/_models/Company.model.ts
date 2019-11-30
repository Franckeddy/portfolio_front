import {Deserializable} from './deserializable.model';

export class Company implements Deserializable{
    name: string;

    deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
