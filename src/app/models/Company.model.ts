import {Deserializable} from './deserializable.model';
import { ActivityArea } from './ActivityArea.model';

export class Company implements Deserializable{
    name: string;
    activity_areas: ActivityArea;
    deserialize(input: any): this {
      Object.assign(this, input);
      this.activity_areas = new ActivityArea();
    return this;
  }
}
