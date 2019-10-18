// L'intercepteur JWT intercepte les demandes http de l'application pour ajouter un jeton d'authentification JWT à l'en-tête Authorization si l'utilisateur est connecté.
// Il est implémenté à l'aide de la classe HttpInterceptor introduite dans Angular 4.3 avec le nouveau HttpClientModule. 
//En étendant la classe HttpInterceptor, vous pouvez créer un intercepteur personnalisé pour modifier les demandes http avant qu'elles ne soient envoyées au serveur. 
//Dans ce cas, FakeBackendInterceptor intercepte certaines demandes en fonction de leur URL et fournit une fausse réponse au lieu d'aller au serveur.
// Les intercepteurs HTTP sont ajoutés au pipeline de demandes dans la section fournisseurs (providers) du fichier app.module.ts.

import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AuthenticationService } from '../_services/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}