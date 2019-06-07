import {NgModule} from "@angular/core";
import {ArchivePrincipRoutingModule} from "./archive-princip-routing.module";
import {CommonModule, DatePipe} from "@angular/common";
import {MaterialModule} from "../material/material.module";
import {ArchivePrincipComponent} from "./archive-princip.component";
import {MainNavComponent} from "./main-nav/main-nav.component";
import {ProfilComponent} from "./profil/profil.component";
import { AjouterpersonnelComponent } from './parametre/personnel/ajouterpersonnel/ajouterpersonnel.component';
import { FileUploadModule } from 'ng2-file-upload';
import { TousPersonnelTabComponent } from './parametre/personnel/tous-personnel-tab/tous-personnel-tab.component';
import { ParametreComponent } from './parametre/parametre.component';
import { PersonnelComponent } from './parametre/personnel/personnel.component';
import { DivisionServiceComponent } from './parametre/division-service/division-service.component';
import { UtilisateurComponent } from './parametre/utilisateur/utilisateur.component';
import { AjouterUtilisateurComponent } from './parametre/utilisateur/ajouter-utilisateur/ajouter-utilisateur.component';
import { AjouterDivisionComponent } from './parametre/division-service/ajouter-division/ajouter-division.component';
import { AjouterServiceComponent } from './parametre/division-service/ajouter-service/ajouter-service.component';
import { PersonnelImpriComponent } from './parametre/personnel/tous-personnel-tab/personnel-impri/personnel-impri.component';
import { ArchiveVerseeComponent } from './archive/archive-versee/archive-versee.component';
import { ArchiveConsulterComponent } from './archive/archive-consulter/archive-consulter.component';
import { AjouterAchivevComponent } from './archive/archive-versee/ajouter-achivev/ajouter-achivev.component';

@NgModule({
  imports: [
    ArchivePrincipRoutingModule,
    CommonModule,
    MaterialModule,FileUploadModule
  ],
  declarations: [
    ArchivePrincipComponent,MainNavComponent,ProfilComponent,
    AjouterpersonnelComponent, TousPersonnelTabComponent, ParametreComponent,
    PersonnelComponent, DivisionServiceComponent, UtilisateurComponent,
    AjouterUtilisateurComponent, AjouterDivisionComponent, AjouterServiceComponent,
    PersonnelImpriComponent,
    ArchiveVerseeComponent,
    ArchiveConsulterComponent,
    AjouterAchivevComponent,

  ],
  providers: [DatePipe],
})
export class ArchivePrincipModule {
}
