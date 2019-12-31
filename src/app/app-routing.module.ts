// Le routage pour l'application Angular est configuré comme un tableau de Routes, chaque composant est mappé sur un chemin afin que le routeur angulaire sache quel composant afficher en fonction de l'URL dans la barre d'adresse du navigateur.
// La route de la page d'accueil est sécurisée en passant AuthGuard à la propriété canActivate de la route.
// Le tableau Routes est transmis à la méthode RouterModule.forRoot() qui crée un module de routage avec toutes les routes d'application configurées et inclut également tous les fournisseurs de routeurs angulaires et les directives telles que <router-outlet></router-outlet> directive.

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { AuthGuard } from './helpers';
import { FourofourComponent } from './models/fourofour';

import {SingleCandidatComponent} from './components/single-candidat';
import {CandidatListComponent} from './components/_list/candidat-list';
import { CandidatAddComponent } from './components/_add/candidat-add';
import { EditCandidatComponent } from './components/_edit/edit-candidat';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'not-found', component: FourofourComponent },

    { path: 'candidats-single', component: SingleCandidatComponent },
    { path: 'candidats-list', component: CandidatListComponent },
    { path: 'add-candidat', component: CandidatAddComponent },
    { path: 'edit-candidat/:id', component: EditCandidatComponent },
    { path: 'candidats/:id', component: CandidatListComponent },
    { path: '**', redirectTo: '/not-found' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
