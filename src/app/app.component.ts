// Le composant app est le composant racine de l'application, il définit la balise racine de l'application comme <app></app> avec la propriété selector du décorateur @Component.
// Il s'abonne à la variable currentUser observable dans le service d'authentification afin de pouvoir afficher / masquer de manière réactive la barre de navigation principale lorsque l'utilisateur se connecte / déconnecte de l'application.
// Le composant d'application contient une méthode logout() qui est appelée à partir du lien de déconnexion situé dans la barre de navigation principale ci-dessus pour déconnecter l'utilisateur et le rediriger vers la page de connexion.

import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './_services/authentication.service';
import { User } from './_models';

@Component({ 
    selector: 'app', 
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}