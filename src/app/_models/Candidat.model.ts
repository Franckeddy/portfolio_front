import { Deserializable } from './deserializable.model';
import { Langue } from './Langue.model';
import { License } from './License.model';
import { School } from './School.model';
import { Company } from './Company.model';

export class Candidat implements Deserializable {
  firstname: string;
  lastname: string;
  adress: string;
  town: string;
  zipcode: string;
  email: string;
  short_description: string;
  date_of_birth: string;
  langues: Langue;
  licenses: License;
  schools: School;
  companies: Company;

  deserialize(input: any) {
    Object.assign(this, input);

      this.langues = new Langue().deserialize(input.langues);
      this.licenses = new License().deserialize(input.licenses);
      this.schools = new School().deserialize(input.schools);
      this.companies = new Company().deserialize(input.companies);

    return this;
  }
}
