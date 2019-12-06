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
import { fakeBackendProvider } from './_helpers ';
import { CandidatService } from './_services/candidats.service';

import { appRoutingModule } from './app-routing.module';
import { ErrorInterceptor } from './_helpers ';
import { JwtInterceptor } from './_helpers ';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home';
import { LoginComponent } from './login/login';
import { RegisterComponent } from './register/register';
import { AlertComponent } from './_components/alert';
import { FourofourComponent } from './_models/fourofour';
import { SingleCandidatComponent } from './_components/single-candidat';

// _list
import { CandidatListComponent } from './_components/_list/candidat-list';

// _forms
import { CandidatFormComponent } from './_forms/candidat-form';

// _add
import { CandidatAddComponent } from './_components/_add/candidat-add';

// _edit
import { EditCandidatComponent } from './_components/_edit/edit-candidat';

// _layout
import { HeaderComponent } from './_layout/header';
import { FooterComponent } from './_layout/footer';
import { ExtranavMenuComponent } from './_layout/header/_header-component/extranav-menu';
import { HeaderNavComponent } from './_layout/header/_header-component/header-nav/header-nav.component';
import { MatNativeDateModule } from '@angular/material/core';
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
    MatNativeDateModule,
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
        CandidatService,

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
