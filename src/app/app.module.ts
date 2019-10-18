import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers ';

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
import { CandidatFormComponent } from './candidat-list/candidat-form/candidat-form.component';
import { SingleCandidatComponent } from './candidat-list/single-candidat/single-candidat.component';
import { CandidatListComponent } from './candidat-list/candidat-list.component';
import { SchoolListComponent } from './Entity-list/school-list/school-list.component';
import { DiplomeListComponent } from './Entity-list/diplome-list/diplome-list.component';
import { LangueListComponent } from './Entity-list/langue-list/langue-list.component';
import { LicenseListComponent } from './Entity-list/license-list/license-list.component';
import { FormationListComponent } from './Entity-list/formation-list/formation-list.component';
import { CompanyListComponent } from './Entity-list/company-list/company-list.component';
import { ActivityAreaListComponent } from './Entity-list/activity-area-list/activity-area-list.component';

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
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };
