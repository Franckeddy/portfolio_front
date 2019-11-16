import { from } from 'rxjs';
import { Langue } from './Langue.model';
import { License } from './License.model';
import { School } from './School.model';
import { Company } from './Company.model';

export interface Candidat {
  firstname: string,
  lastname: string,
  adress: string,
  town: string,
  zipcode: string,
  email: string,
  short_description: string,
  date_of_birth: string,
  langues: Array<Langue>;
  licenses: Array<License>;
  schools: Array<School>;
  companies: Array<Company>;
}