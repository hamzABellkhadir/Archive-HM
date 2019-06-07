import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import {LoginPrincipModule} from "./login-princip/login-princip.module";
import {ArchivePrincipModule} from "./archive-princip/archive-princip.module";
import {AjouterpersonnelComponent} from "./archive-princip/parametre/personnel/ajouterpersonnel/ajouterpersonnel.component";
import {AjouterUtilisateurComponent} from "./archive-princip/parametre/utilisateur/ajouter-utilisateur/ajouter-utilisateur.component";
import {AjouterServiceComponent} from "./archive-princip/parametre/division-service/ajouter-service/ajouter-service.component";
import {AjouterDivisionComponent} from "./archive-princip/parametre/division-service/ajouter-division/ajouter-division.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,


    LoginPrincipModule,
    ArchivePrincipModule,
  ],


  entryComponents : [AjouterpersonnelComponent,AjouterUtilisateurComponent
    ,AjouterServiceComponent,AjouterDivisionComponent],// pour faire une poopUp il faut ajouter le compoasant
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
