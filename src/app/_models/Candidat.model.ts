import { EmailValidator } from '@angular/forms';

export class Candidat {
  media: string;
  constructor(
    public firstname: { type: String, required: true },
    public lastname: { type: String, required: true },
    public adress: string,
    public town: string,
    public zipcode: { type: Number },
    public email: { type: EmailValidator, unique: true, required: true },
    public date_of_birth: Date,
    public langues: string,
    public licenses: string,
    public schools: string,
    public companies: string,
  ) {}
}
