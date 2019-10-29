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
import { SchoolService } from './_services/school.service';
import { LangueService } from './_services/langue.service';
import { CompanyService } from './_services/company.service';
import { FormationService } from './_services/formation.service';
import { LicenseService } from './_services/license.service';
import { ActivityService } from './_services/activity.service';
import { DiplomeService } from './_services/diplome.service';

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
import { SingleCandidatComponent } from './_components/single-candidat';

// _list
import { CandidatListComponent } from './_components/_list/candidat-list';
import { SchoolListComponent } from './_components/_list/school-list';
import { DiplomeListComponent } from './_components/_list/diplome-list';
import { LangueListComponent } from './_components/_list/langue-list';
import { LicenseListComponent } from './_components/_list/license-list';
import { FormationListComponent } from './_components/_list/formation-list';
import { CompanyListComponent } from './_components/_list/company-list';
import { ActivityAreaListComponent } from './_components/_list/activity-area-list';

// _forms
import { CandidatFormComponent } from './_forms/candidat-form';
import { FormationFormComponent } from './_forms/formation-form';
import { SchoolFormComponent } from './_forms/school-form';
import { LangueFormComponent } from './_forms/langue-form';
import { LicenseFormComponent } from './_forms/license-form';
import { ActivityAreaFormComponent } from './_forms/activity-area-form';
import { CompanyFormComponent } from './_forms/company-form';

// _add
import { CandidatAddComponent } from './_components/_add/candidat-add';

// _edit
import { EditCandidatComponent } from './_components/_edit/edit-candidat/edit-candidat.component';

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
        EditCandidatComponent,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        CandidatService,
        SchoolService,
        LangueService,
        CompanyService,
        FormationService,
        LicenseService,
        ActivityService,
        DiplomeService,

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
