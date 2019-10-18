import { EmailValidator } from '@angular/forms';
// Le modèle utilisateur est une petite classe qui définit les propriétés d'un utilisateur. 
// La propriété token est utilisée pour contenir le jeton JWT renvoyé par l'API en cas d'authentification réussie.

export class User {
    id: number;
    username: { type: String, required: true };
    password: { type: String, required: true };
    firstName: string;
    lastName: string;
    token: string;
    email: { type: EmailValidator, required: true };
    roles: string;
}