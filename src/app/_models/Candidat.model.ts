export class Candidat {
  media: string;

  constructor(
    public firstname: string,
    public lastname: string,
    public adress: string,
    public town: string,
    public zipcode: string,
    public email: string,
    public date_of_birth: string,
    public langues: string,
    public licenses: string,
    public schools: string,
    public companies: string,
  ) {}

}
