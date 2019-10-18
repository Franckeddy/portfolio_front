// Le modèle utilisateur est une petite classe qui définit les propriétés d'un utilisateur. 
// La propriété token est utilisée pour contenir le jeton JWT renvoyé par l'API en cas d'authentification réussie.

export class User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    token: string;
    email: string;
    roles: string;
}