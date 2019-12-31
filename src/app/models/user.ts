import { EmailValidator } from '@angular/forms';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Le modèle utilisateur est une petite classe qui définit les propriétés d'un utilisateur. 
// La propriété token est utilisée pour contenir le jeton JWT renvoyé par l'API en cas d'authentification réussie.

export interface User {
    id: number;
    username: { type: String, required: true };
    password: { type: String, required: true };
    firstName: string;
    lastName: string;
    token: string;
    email: { type: EmailValidator, required: true };
    roles: string;
}

@Injectable({ providedIn: 'root' })
export class UserService {
  private usersUrl = 'api/users';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }
}