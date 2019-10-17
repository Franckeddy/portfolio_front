import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { AuthGuard } from './_helpers ';
import { FourofourComponent } from './_models/fourofour';

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'not-found', component: FourofourComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '/not-found' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
