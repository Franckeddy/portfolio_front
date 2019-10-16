import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './register/register/register.component';
import { AuthGuard } from './_helpers /auth.guard';
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