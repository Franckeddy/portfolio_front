// Le module d'application définit le module racine de l'application ainsi que les métadonnées relatives au module.
// Pour plus d'informations sur les modules angulaires, consultez cette page sur le site officiel de la documentation.
// C’est là que le faux fournisseur d’API backend est ajouté à l’application.
// Pour passer à une véritable API, supprimez simplement les fournisseurs situés en dessous du commentaire // providers used to create fake backend.

import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { APP_BASE_HREF } from '@angular/common';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatDatepickerModule} from '@angular/material/datepicker';

// used to create fake backend
import { fakeBackendProvider } from './helpers';
import { CandidatService } from './services/candidats.service';

import { appRoutingModule } from './app-routing.module';
import { ErrorInterceptor } from './helpers';
import { JwtInterceptor } from './helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';
import { AlertComponent } from './components/alert';
import { FourofourComponent } from './models/fourofour';
import { SingleCandidatComponent } from './components/single-candidat';

// _list
import { CandidatListComponent } from './components/_list/candidat-list';

// forms
import { CandidatFormComponent } from './components/forms/candidat-form';

// _add
import { CandidatAddComponent } from './components/_add/candidat-add';

// _edit
import { EditCandidatComponent } from './components/_edit/edit-candidat';

// layout
import { HeaderComponent } from './components/layout/header';
import { FooterComponent } from './components/layout/footer';
import { ExtranavMenuComponent } from './components/layout/header/_header-component/extranav-menu';
import { HeaderNavComponent } from './components/layout/header/_header-component/header-nav/header-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    appRoutingModule,
    NgxPaginationModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
  ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        FooterComponent,
        FourofourComponent,
        CandidatFormComponent,
        SingleCandidatComponent,
        CandidatListComponent,
        CandidatAddComponent,
        EditCandidatComponent,
        HeaderComponent,
        ExtranavMenuComponent,
        HeaderNavComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
        { provide: APP_BASE_HREF, useValue: '/' },
        MatDatepickerModule,
        CandidatService,

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
