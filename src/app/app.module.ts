// Le module d'application définit le module racine de l'application ainsi que les métadonnées relatives au module.
// Pour plus d'informations sur les modules angulaires, consultez cette page sur le site officiel de la documentation.
// C’est là que le faux fournisseur d’API backend est ajouté à l’application.
// Pour passer à une véritable API, supprimez simplement les fournisseurs situés en dessous du commentaire // providers used to create fake backend.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { FooterComponent } from './_components/footer';
import { FourofourComponent } from './_models/fourofour';
import { CandidatFormComponent } from './_forms/candidat-form';
import { SingleCandidatComponent } from './_components/single-candidat';
import { CandidatListComponent } from './_components/candidat-list';
import { SchoolListComponent } from './_components/school-list';
import { DiplomeListComponent } from './_components/diplome-list';
import { LangueListComponent } from './_components/langue-list';
import { LicenseListComponent } from './_components/license-list';
import { FormationListComponent } from './_components/formation-list';
import { CompanyListComponent } from './_components/company-list';
import { ActivityAreaListComponent } from './_components/activity-area-list';
import { FormationFormComponent } from './_forms/formation-form';
import { SchoolFormComponent } from './_forms/school-form';
import { LangueFormComponent } from './_forms/langue-form';
import { LicenseFormComponent } from './_forms/license-form';
import { ActivityAreaFormComponent } from './_forms/activity-area-form';
import { CompanyFormComponent } from './_forms/company-form';
import { CandidatAddComponent } from './_components/candidat-add';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule
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
        SchoolListComponent,
        DiplomeListComponent,
        LangueListComponent,
        LicenseListComponent,
        FormationListComponent,
        CompanyListComponent,
        ActivityAreaListComponent,
        FormationFormComponent,
        SchoolFormComponent,
        LangueFormComponent,
        LicenseFormComponent,
        ActivityAreaFormComponent,
        CompanyFormComponent,
        CandidatAddComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        CandidatService,

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
