import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module';
import {LoginPrincipModule} from "./login-princip/login-princip.module";
import {ArchivePrincipModule} from "./archive-princip/archive-princip.module";
import {AjouterpersonnelComponent} from "./archive-princip/parametre/personnel/ajouterpersonnel/ajouterpersonnel.component";
import {AjouterUtilisateurComponent} from "./archive-princip/parametre/utilisateur/ajouter-utilisateur/ajouter-utilisateur.component";
import {AjouterServiceComponent} from "./archive-princip/parametre/division-service/ajouter-service/ajouter-service.component";
import {AjouterDivisionComponent} from "./archive-princip/parametre/division-service/ajouter-division/ajouter-division.component";
import {AjouterAchivevComponent} from "./archive-princip/archive/archive-versee/ajouter-achivev/ajouter-achivev.component";
import {AjouterAchivecComponent} from "./archive-princip/archive/archive-versee/ajouter-achivec/ajouter-achivec.component";
import {AjouterASEEComponent} from "./archive-princip/archive/archive-consulter/ajouter-asee/ajouter-asee.component";
import {PersonnelInfoComponent} from "./archive-princip/archive/personnel-info/personnel-info.component";
import {ConsultationImpriComponent} from "./login-princip/nv-information/consultation-impri/consultation-impri.component";
import {TabArchivePersonnelComponent} from "./archive-princip/archive/archive-versee/tab-archive-personnel/tab-archive-personnel.component";
import {PersoInformaComponent} from "./archive-princip/archive/archive-versee/perso-informa/perso-informa.component";

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

  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  entryComponents : [AjouterpersonnelComponent,AjouterUtilisateurComponent
    ,AjouterServiceComponent,AjouterDivisionComponent,
    AjouterAchivevComponent,AjouterAchivecComponent,
    AjouterASEEComponent,PersonnelInfoComponent,TabArchivePersonnelComponent,PersoInformaComponent],// pour faire une poopUp il faut ajouter le compoasant
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
